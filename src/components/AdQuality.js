import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AdsActions from '../actions/AdsActions';
import AdModalActions from '../actions/AdModalActions';
import AlertActions from '../actions/AlertActions';
import HelpModalActions from '../actions/HelpModalActions';
import MarkupModalActions from '../actions/MarkupModalActions';
import NetworkModalActions from '../actions/NetworkModalActions';
import apiUtil from '../utils/apiUtil';
import ModalStackingUtil from '../utils/ModalStackingUtil';
import getViewport from './Layout/getViewport';
import Grid from './Layout/Grid';
import Row from './Layout/Row';
import AdGrid from './AdGrid';
import AdCard from './AdCard';
import AdInfo from './AdInfo';
import AdModal from './AdModal';
import AdReasons from './AdReasons';
import AlertModal from './AlertModal';
import Button from './Button';
import FlagComponent from './Flag';
import MarkupModal from './MarkupModal';
import NetworkModal from './NetworkModal';
import NavBar from './NavBar';
import SideBar from './SideBar';

class AdQuality extends Component {

  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.object),
    adInfoIsShowing: PropTypes.bool,
    adReasonsIsShowing: PropTypes.bool,
    adModalIsShowing: PropTypes.bool,
    adToRender: PropTypes.string,
    blockAd: PropTypes.bool,
    displayDateRange: PropTypes.string,
    focusedAd: PropTypes.object,
    adTypeInputValue: PropTypes.string,
    bidderInputValue: PropTypes.string,
    creativeInputValue: PropTypes.string,
    dateRange: PropTypes.object,
    deviceIdInputValue: PropTypes.string,
    deviceTypeInputValue: PropTypes.string,
    domainInputValue: PropTypes.string,
    formSubmit: PropTypes.func,
    iabInputValue: PropTypes.string,
    statusInputValue: PropTypes.string,
    stateInputChange: PropTypes.func,
    stateInputValue: PropTypes.string,
    countryInputValue: PropTypes.string,
    cityInputValue: PropTypes.string,
    isFetchingAds: PropTypes.bool,
    alertType: PropTypes.string,
    alertLabel: PropTypes.string,
    alertMessage: PropTypes.string,
    alertModalIsShowing: PropTypes.bool,
    markupModalIsShowing: PropTypes.bool,
    networkModalIsShowing: PropTypes.bool,
    networkCalls: PropTypes.array,
    showAdReasons: PropTypes.func,
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.openAdModal           = this.openAdModal.bind(this);
    this.closeAdModal          = this.closeAdModal.bind(this);
    this.openAlertModal        = this.openAlertModal.bind(this);
    this.closeAlertModal       = this.closeAlertModal.bind(this);
    this.closeHelpModal        = this.closeHelpModal.bind(this);
    this.openMarkupModal       = this.openMarkupModal.bind(this);
    this.closeMarkupModal      = this.closeMarkupModal.bind(this);
    this.openNetworkModal      = this.openNetworkModal.bind(this);
    this.closeNetworkModal     = this.closeNetworkModal.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AdsActions.fetchAdsIfNeeded(apiUtil.API_GET));
  }

  componentDidMount() {
    ModalStackingUtil();
  }

  clearAdRender() {
    this.setState({
      adToRender: null
    });
  }

  handleReasonClick(clickedReason) {
    const { dispatch, focusedAd } = this.props;

    let newStatus = null;

    if (focusedAd.status === 0 || focusedAd.status === 3) {
      newStatus = 2;
    }
    else {
      newStatus = 3;
    }

    dispatch(AdsActions.updateAPI(clickedReason, focusedAd.bidder_name, focusedAd.creativeId, focusedAd.campaignId, newStatus));
    dispatch(AdModalActions.showAdInfo());
  }

  handleReasonCancelClick() {
    const { dispatch } = this.props;
    dispatch(AdModalActions.showAdInfo());
  }

  openAdModal(ad) {
    const { dispatch } = this.props;
    this.renderAdActionButton(ad.status);
    dispatch(AdsActions.setFocusedAd(ad));
    dispatch(AdsActions.fetchAdMarkup(ad.markup));
    dispatch(AdsActions.fetchNetworkCalls(apiUtil.API_GET + '?bidder=' + ad.bidder_id + '&creative_id=' + ad.creativeId + '&har_details=true'));
    dispatch(AdModalActions.showAdModal());
    dispatch(AdModalActions.showAdInfo());
  }

  closeAdModal() {
    const { dispatch } = this.props;
    dispatch(AdModalActions.hideAdModal());
  }

  openAlertModal() {
    const { dispatch } = this.props;
    dispatch(AlertActions.showAlertModal());
  }

  closeAlertModal() {
    const { dispatch } = this.props;
    dispatch(AlertActions.hideAlertModal());
  }

  openHelpModal(helpLink) {
    const { dispatch } = this.props;
    dispatch(HelpModalActions.showHelpModal(helpLink));
  }

  closeHelpModal() {
    const { dispatch } = this.props;
    dispatch(HelpModalActions.hideHelpModal());
  }

  openMarkupModal() {
    const { dispatch } = this.props;
    dispatch(MarkupModalActions.showMarkupModal());
  }

  closeMarkupModal() {
    const { dispatch } = this.props;
    dispatch(MarkupModalActions.hideMarkupModal());
  }

  openNetworkModal() {
    const { dispatch } = this.props;
    dispatch(NetworkModalActions.showNetworkModal());
  }

  closeNetworkModal() {
    const { dispatch } = this.props;
    dispatch(NetworkModalActions.hideNetworkModal());
  }

  renderAdActionButton(status) {
    if (status === 0 || status === 3 ) {
      return (<Button block={false} className="clearfix marg-t-md pull-right" label='Block' onClick={this.showAdReasons.bind(this)}/>);
    }
    else {
      return (<Button block={false} type="secondary" className="clearfix marg-t-md pull-right" label='Unblock' onClick={this.showAdReasons.bind(this)}/>);
    }
  }

  renderAdReason(status) {
    let block,
        reasonArray;

    if (status === 0 || status === 3) {
      block = true;
      reasonArray = ['Auto redirect', 'Auto pop-up ad', 'Malware ad', 'Bad user experience', 'Blacklisted ad domain', 'Poor quality [video]', 'Poor quality [DEC]'];
    }
    else {
      block = false;
      reasonArray = ['Bidder has removed offending ad', 'Bidder has fixed offending ad behavior', 'Creative ID has changed'];
    }

    const listItems = reasonArray.map((reason, i) => {
      return (
        <li className="pad-t-sm pad-b-sm" data-reason={reason} key={i} onClick={this.handleReasonClick.bind(this, reason)}>{reason}</li>
      );
    });

    return (<AdReasons block={block} cancelClick={this.handleReasonCancelClick.bind(this)} hide={this.props.adReasonsIsShowing}>{listItems}</AdReasons>);

  }

  renderHelpLink(status) {
    if (status === 0 || status === 3 ) {
      return (<i className="fa fa-question-circle marg-l-xs" alt="Blocking bad ads manually" aria-hidden="true" role="button" onClick={this.openHelpModal.bind(this, apiUtil.HELP_PATH + 'Blocking_bad_ads_manually.htm')}></i>);
    }
    else {
      return (<i className="fa fa-question-circle marg-l-xs" alt="Unblocking bad ads manually" aria-hidden="true" role="button" onClick={this.openHelpModal.bind(this, apiUtil.HELP_PATH + 'Unblocking_bad_ads.htm')}></i>);
    }
  }

  showAdReasons() {
    const { dispatch } = this.props;
    dispatch(AdModalActions.showAdReasons());
  }


  render() {
    const { ads, adInfoIsShowing, adModalIsShowing, adToRender, focusedAd, adTypeInputValue, bidderInputValue, creativeInputValue, deviceIdInputValue, deviceTypeInputValue, iabInputValue, statusInputValue, stateInputValue, countryInputValue, cityInputValue, isFetchingAds, alertModalIsShowing, alertType, alertLabel, alertMessage, markupModalIsShowing, networkModalIsShowing, networkCalls } = this.props;

    const renderLoading = () => {
      return (<img id="load-icon" className="center" src={'./images/load-icon.gif'}/>);
    }

    let adCards = null;


    if (isFetchingAds || ads[0] === '') {
      adCards = renderLoading();
    }
    else {
      adCards = ads.map((ad, i) => {
        return (
          <div className="grid-item" key={i}>
            <FlagComponent isVisible={ad.status}/>
            <AdCard key={ad.creativeId} creativeID={ad.creativeId} bidder={ad.bidder_name} adSize={ad.adSize} imageURL={ad.image} networkCalls={ad.network_calls} iabCatagories={ad.iabs} adMarkup={ad.markup} adStatus={ad.status} data-dismiss="modal" onClick={this.openAdModal.bind(this, ad)}/>
          </div>
        );
      });
    }



    return (
      <div>
        <NavBar/>
        <Grid>
          <Row>
            <div className='sidebar'>
              <SideBar adTypeValue={adTypeInputValue} adTypeInputChange={this.adTypeInputChange} bidderValue={bidderInputValue} bidderInputChange={this.bidderInputChange} creativeValue={creativeInputValue} creativeInputChange={this.creativeInputChange} deviceIdValue={deviceIdInputValue} deviceIdInputChange={this.deviceIdInputChange} deviceTypeValue={deviceTypeInputValue} iabInputChange={this.iabInputChange} iabValue={iabInputValue} statusInputChange={this.statusInputChange} statusValue={statusInputValue} stateValue={stateInputValue} stateInputChange={this.stateInputChange} countryValue={countryInputValue} countryInputChange={this.countryInputChange} cityValue={cityInputValue} cityInputChange={this.cityInputChange} resetClick={this.resetClick} formSubmit={this.formSubmit}/>
            </div>
            <div className="main">
              <section>
                <AlertModal show={alertModalIsShowing} alertType={alertType} alertLabel={alertLabel} alertMessage={alertMessage} close={this.closeAlertModal}/>
                <AdGrid>
                  {adCards}
                </AdGrid>
                <AdModal close={this.closeAdModal} imageURL={focusedAd.image} markupClick={this.openMarkupModal} markupURL={focusedAd.markup} networkClick={this.openNetworkModal} show={adModalIsShowing}>
                  <AdInfo bidderId={focusedAd.bidder_id} bidderName={focusedAd.bidder_name} adDomain={focusedAd.domain} adType={focusedAd.adType} creativeID={focusedAd.creativeId} helpLink={this.renderHelpLink(focusedAd.status)} hide={adInfoIsShowing} iabCats={focusedAd.iabs} reason={focusedAd.reason} status={focusedAd.status} statusAction={this.renderAdActionButton(focusedAd.status)}/>
                  {this.renderAdReason(focusedAd.status)}
                </AdModal>
                <MarkupModal show={markupModalIsShowing} adMarkup={adToRender} close={this.closeMarkupModal}/>
                <NetworkModal show={networkModalIsShowing} networkCalls={networkCalls} close={this.closeNetworkModal}/>
              </section>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.ads.ads,
    isFetchingAds: state.ads.isFetching,
    adInfoIsShowing: state.adModal.adInfoIsShowing,
    adModalIsShowing: state.adModal.adModalIsShowing,
    adReasonsIsShowing: state.adModal.adReasonsIsShowing,
    adToRender: state.ads.adToRender,
    focusedAd: state.ads.focusedAd,
    alertType: state.alerts.alert.type,
    alertLabel: state.alerts.alert.label,
    alertMessage: state.alerts.alert.message,
    alertModalIsShowing: state.alerts.alertModalIsShowing,
    markupModalIsShowing: state.markupModal.markupModalIsShowing,
    networkModalIsShowing: state.networkModal.networkModalIsShowing,
    networkCalls: state.ads.networkCalls
  }
}

const AdQualityLayoutWithViewport = getViewport(AdQuality);
export default connect(mapStateToProps)(AdQualityLayoutWithViewport);
