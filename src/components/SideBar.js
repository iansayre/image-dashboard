/* SIDEBAR COMPONENT
 * @AUTHOR Ian Sayre 06/16/16
 */

import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AdsActions from '../actions/AdsActions';
import AlertActions from '../actions/AlertActions';
import FilterActions from '../actions/FilterActions';
import HelpModalActions from '../actions/HelpModalActions';
import apiUtil from '../utils/apiUtil';
import Bidders from './Bidders';
import Button from './Button';
import DateCollapse from './DateCollapse';
import Devices from './Devices';
import Form from './Forms/Form';
import Locations from './Locations';
import SelectInput from './Forms/SelectInput';
import TextInput from './Forms/TextInput';

class SideBar extends Component {

  static propTypes = {
    adTypeInputChange: PropTypes.func,
    adTypeValue: PropTypes.string,
    bidderOptions: PropTypes.arrayOf(PropTypes.object),
    bidderValue: PropTypes.string,
    bidderInputChange: PropTypes.func,
    creativeValue: PropTypes.string,
    creativeInputChange: PropTypes.func,
    dateRange: PropTypes.object,
    deviceIdValue: PropTypes.string,
    deviceIdInputChange: PropTypes.func,
    deviceTypeOptions: PropTypes.arrayOf(PropTypes.object),
    deviceTypeValue: PropTypes.string,
    deviceTypeInputChange: PropTypes.func,
    domainValue: PropTypes.string,
    domainInputChange: PropTypes.func,
    formSubmit: PropTypes.func,
    iabValue: PropTypes.string,
    iabInputChange: PropTypes.func,
    resetClick: PropTypes.func,
    statusValue: PropTypes.string,
    statusInputChange: PropTypes.func,
    stateInputChange: PropTypes.func,
    stateValue: PropTypes.string,
    countryInputChange: PropTypes.func,
    countryValue: PropTypes.string,
    dmaInputChange: PropTypes.func,
    dmaValue: PropTypes.string,
    cityInputChange: PropTypes.func,
    cityValue: PropTypes.string,
    zipInputChange: PropTypes.func,
    zipValue: PropTypes.string
  };

  static defaultProps = {
    adTypeInputChange: () => {},
    bidderInputChange: () => {},
    creativeInputChange: () => {},
    deviceIdInputChange: () => {},
    deviceTypeInputChange: () => {},
    domainInputChange: () => {},
    formSubmit: () => {},
    iabInputChange: () => {},
    resetClick: () => {},
    statusInputChange: () => {},
    stateInputChange: () => {},
    countryInputChange: () => {},
    dmaInputChange: () => {},
    cityInputChange: () => {},
    zipInputChange: () => {}
  };


  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.adTypeInputChange     = this.adTypeInputChange.bind(this);
    this.bidderInputChange     = this.bidderInputChange.bind(this);
    this.creativeInputChange   = this.creativeInputChange.bind(this);
    this.deviceIdInputChange   = this.deviceIdInputChange.bind(this);
    this.deviceTypeInputChange = this.deviceTypeInputChange.bind(this);
    this.domainInputChange     = this.domainInputChange.bind(this);
    this.formSubmit            = this.formSubmit.bind(this);
    this.iabInputChange        = this.iabInputChange.bind(this);
    this.resetClick            = this.resetClick.bind(this);
    this.statusInputChange     = this.statusInputChange.bind(this);
    this.stateInputChange      = this.stateInputChange.bind(this);
    this.countryInputChange    = this.countryInputChange.bind(this);
    this.dmaInputChange        = this.dmaInputChange.bind(this);
    this.cityInputChange       = this.cityInputChange.bind(this);
    this.zipInputChange        = this.zipInputChange.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(FilterActions.fetchBiddersIfNeeded(apiUtil.API_GET_BIDDERS));
    dispatch(FilterActions.fetchDeviceTypesIfNeeded(apiUtil.API_GET_DEVICE_TYPES));
  }

  adTypeInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.adTypeChange(event));
  }

  bidderInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.bidderChange(event));
  }

  creativeInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.creativeChange(event));
  }

  deviceIdInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.deviceIdChange(event));
  }

  deviceTypeInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.deviceTypeChange(event));
  }

  domainInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.domainChange(event));
  }

  formSubmit() {
    const { dispatch, adTypeValue, bidderValue, creativeValue, dateRange, deviceIdValue, deviceTypeValue, domainValue, iabValue, statusValue, stateValue, countryValue, cityValue, zipValue, dmaValue } = this.props;

    let startDateParam,
      endDateParam,
      statusParam,
      bidderParam,
      creativeParam,
      domainParam,
      deviceIdParam,
      deviceTypeParam,
      iabParam,
      adTypeParam,
      locationStateParam,
      locationCountryParam,
      locationDMAParam,
      locationCityParam,
      locationZipParam,
      newRequest = '',
      requestParams = [];

    if (dateRange.from) {
      const formStartDate = moment(dateRange.from).toISOString().split('T');

      startDateParam = 'start_date=' + formStartDate[0]; // equals YYYY-MM-DD
      requestParams.push(startDateParam);
    }

    if (dateRange.to) {
      const fomrEndDate = moment(dateRange.to).toISOString().split('T');

      endDateParam = 'end_date=' + fomrEndDate[0]; // equals YYYY-MM-DD
      requestParams.push(endDateParam);
    }

    if (statusValue) {
      if (statusValue !== '-1') {
        statusParam = 'status=' + statusValue;
        requestParams.push(statusParam);
      }
    }

    if (adTypeValue) {
      if (adTypeValue !== '0') {
        if (adTypeValue === '1') {
          adTypeParam = 'ad_type=banner';
        }
        else if (adTypeValue === '2') {
          adTypeParam = 'ad_type=video';
        }

        requestParams.push(adTypeParam);
      }
    }

    if (bidderValue) {
      if (bidderValue !== '0' || bidderValue !== ' ') {
        bidderParam = 'bidder=' + bidderValue;
        requestParams.push(bidderParam);
      }
    }

    if (creativeValue) {
      creativeParam = 'creative_id=' + creativeValue;
      requestParams.push(creativeParam);
    }

    if (domainValue) {
      domainParam = 'domain=' + domainValue;
      requestParams.push(domainParam);
    }

    if (iabValue) {
      if (iabValue !== '0') {
        iabParam = 'iab_category=IAB' + iabValue;
        requestParams.push(iabParam);
      }
    }

    if (deviceIdValue) {
      deviceIdParam = 'device_id=' + deviceIdValue;
      requestParams.push(deviceIdParam);
    }

    if (deviceTypeValue) {
      if (deviceTypeValue !== '0') {
        deviceTypeParam = 'device_type=' + deviceTypeValue;
        requestParams.push(deviceTypeParam);
      }
    }

    if (stateValue) {
      if (stateValue !== '00') {
        locationStateParam = 'state=' + stateValue;
        requestParams.push(locationStateParam);
      }
    }

    if (countryValue) {
      if (countryValue !== '00'){
        locationCountryParam = 'country=' + countryValue;
        requestParams.push(locationCountryParam);
      }
    }

    if (dmaValue) {
      if (dmaValue !== '000') {
        locationDMAParam = 'dma=' + dmaValue;
        requestParams.push(locationDMAParam);
      }
    }

    if (cityValue) {
      locationCityParam = 'city=' + cityValue;
      requestParams.push(locationCityParam);
    }

    if (zipValue) {
      locationZipParam = 'zip_code=' + zipValue;
      requestParams.push(locationZipParam);
    }

    if (requestParams.length > -1 ) {
      newRequest = requestParams.join('&');
      dispatch(FilterActions.setFilter(newRequest));
      dispatch(AlertActions.hideAlertModal());
      dispatch(AdsActions.fetchAds(apiUtil.API_GET + '?' + newRequest));
    }
  }

  iabInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.iabChange(event));
  }

  resetClick() {
    const { dispatch } = this.props;
    dispatch(FilterActions.resetFilter());
    dispatch(AlertActions.hideAlertModal());
    dispatch(AdsActions.fetchAds(apiUtil.API_GET));
    dispatch(FilterActions.fetchBidders(apiUtil.API_GET_BIDDERS));
    dispatch(FilterActions.fetchDeviceTypes(apiUtil.API_GET_DEVICE_TYPES));
  }

  statusInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.statusChange(event));
  }

  stateInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.locationStateChange(event));
  }

  countryInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.locationCountryChange(event));
  }

  dmaInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.locationDMAChange(event));
  }

  cityInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.locationCityChange(event));
  }

  zipInputChange(event) {
    const { dispatch } = this.props;
    dispatch(FilterActions.locationZipChange(event));
  }


  openHelpModal(helpLink) {
    const { dispatch } = this.props;
    dispatch(HelpModalActions.showHelpModal(helpLink));
  }

  closeHelpModal() {
    const { dispatch } = this.props;
    dispatch(HelpModalActions.hideHelpModal());
  }

  render() {
    const statusChoices = [
      {id: -1, displayName: 'All'},
      {id: 0, displayName: 'Allowed'},
      {id: 1, displayName: 'Blocked'},
      {id: 2, displayName: 'Manually Blocked'},
      {id: 3, displayName: 'Manually Unblocked'},
      {id: 4, displayName: 'SDK Blocked'}
    ];

    const adTypeChoices = [
      {id: 0, displayName: 'All'},
      {id: 1, displayName: 'Banner'},
      {id: 2, displayName: 'Video'}
    ];

    const IABChoices = [
      {id: 0, displayName: 'All'},
      {id: 1, displayName: 'Arts and Entertainment'},
      {id: 2, displayName: 'Automotive'},
      {id: 3, displayName: 'Business'},
      {id: 4, displayName: 'Careers'},
      {id: 5, displayName: 'Education'},
      {id: 6, displayName: 'Family and Parenting'},
      {id: 7, displayName: 'Health and Fitness'},
      {id: 8, displayName: 'Food and Drink'},
      {id: 9, displayName: 'Hobbies and Interests'},
      {id: 10, displayName: 'Home and Garden'},
      {id: 11, displayName: 'Law, Government, and Politics'},
      {id: 12, displayName: 'News'},
      {id: 13, displayName: 'Personal Finance'},
      {id: 14, displayName: 'Society'},
      {id: 15, displayName: 'Science'},
      {id: 16, displayName: 'Pets'},
      {id: 17, displayName: 'Sports'},
      {id: 18, displayName: 'Style and Fashion'},
      {id: 19, displayName: 'Technology and Computing'},
      {id: 20, displayName: 'Travel'},
      {id: 21, displayName: 'Real Estate'},
      {id: 22, displayName: 'Shopping'},
      {id: 23, displayName: 'Religion and Spirituality'},
      {id: 24, displayName: 'Uncategorized'},
      {id: 25, displayName: 'Non-Standard Content'},
      {id: 26, displayName: 'Illegal Content'}
    ];


    const { adTypeValue, bidderOptions, bidderValue, creativeValue, deviceIdValue, deviceTypeOptions, deviceTypeValue, domainValue, iabValue, statusValue, stateValue, dmaValue, countryValue, cityValue, zipValue } = this.props;

    return(
      <section>
        <div className="filter-container">
          <i className="fa fa-cog marg-t-sm pad-t-xs marg-r-sm pad-r-xs pull-right" alt="Search Filter" aria-hidden="true" role="button" onClick={this.openHelpModal.bind(this, apiUtil.HELP_PATH + 'ViewingBadAds.htm')}></i>
          <Form className="filter-form pad-r-md pad-l-md">
            <div className="form-group marg-t-lg marg-b-md row">
              <DateCollapse />
            </div>
            <section className="marg-t-sm marg-b-lg">
              <SelectInput label="Status" choices={statusChoices} value={statusValue} onChange={this.statusInputChange}/>
              <SelectInput label="Ad Type" choices={adTypeChoices} value={adTypeValue} onChange={this.adTypeInputChange}/>
            </section>
            <hr/>
            <section className="marg-b-lg">
              <Bidders bidderChoices={bidderOptions} bidderChange={this.bidderInputChange} bidderValue={bidderValue} creativeChange={this.creativeInputChange} creativeValue={creativeValue}/>
              <TextInput label="Advertiser Domain URL" placeholder="Enter Advertiser Domain URL"  value={domainValue} onChange={this.domainInputChange}/>
              <SelectInput label="IAB Category" choices={IABChoices} value={iabValue} onChange={this.iabInputChange}/>
            </section>
            <hr/>
            <Devices deviceIdChange={this.deviceIdInputChange} deviceIdValue={deviceIdValue} deviceTypeChoices={deviceTypeOptions} deviceTypeChange={this.deviceTypeInputChange} deviceTypeValue={deviceTypeValue}/>
            <hr/>
            <Locations stateChange={this.stateInputChange} stateValue={stateValue} countryChange={this.countryInputChange} countryValue={countryValue} dmaValue={dmaValue} dmaChange={this.dmaInputChange} cityChange={this.cityInputChange} cityValue={cityValue} zipChange={this.zipInputChange} zipValue={zipValue}/>
          </Form>
        </div>
        <section className="border-t filter-button-group pad-md">
          <Button block={false} className="clearfix pull-left" label="Reset" type="secondary" onClick={this.resetClick}/>
          <Button block={false} className="clearfix pull-right" label="Search" onClick={this.formSubmit}/>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adTypeValue: state.adFilter.filter.filterForm.adType,
    bidderOptions: state.adFilter.filter.filterForm.bidder.bidders,
    bidderValue: state.adFilter.filter.filterForm.bidder.selectedBidder,
    creativeValue: state.adFilter.filter.filterForm.creativeId,
    dateRange: state.adFilter.filter.dateRange,
    deviceIdValue: state.adFilter.filter.filterForm.deviceId,
    deviceTypeOptions: state.adFilter.filter.filterForm.deviceTypes.types,
    deviceTypeValue: state.adFilter.filter.filterForm.deviceTypes.selectedType,
    domainValue: state.adFilter.filter.filterForm.domainValue,
    iabValue: state.adFilter.filter.filterForm.iabValue,
    statusValue: state.adFilter.filter.filterForm.statusValue,
    stateValue: state.adFilter.filter.filterForm.locationState,
    countryValue: state.adFilter.filter.filterForm.locationCountry,
    dmaValue: state.adFilter.filter.filterForm.locationDMA,
    cityValue: state.adFilter.filter.filterForm.locationCity,
    zipValue: state.adFilter.filter.filterForm.locationZip
  }
}

export default connect(mapStateToProps)(SideBar);
