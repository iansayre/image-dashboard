import React, { Component, PropTypes } from 'react';
import SelectInput from './Forms/SelectInput';
import TextInput from './Forms/TextInput';

class Bidders extends Component {
  static propTypes = {
    bidderChoices: PropTypes.arrayOf(PropTypes.object),
    bidderChange: PropTypes.func,
    bidderValue: PropTypes.string,
    creativeChange: PropTypes.func,
    creativeValue: PropTypes.string
  };
  static defaultProps = {
    bidderChange: () => {},
    creativeChange: () => {}
  };

  constructor(props) {
    super(props);
    this.bidderChange = this.bidderChange.bind(this);
    this.creativeChange = this.creativeChange.bind(this);
  }


  bidderChange(event) {
    this.props.bidderChange(event);
  }

  creativeChange(event) {
    this.props.creativeChange(event);
  }

  getBidders() {
    this.populateChoices(this.props.bidderChoices);
  }



  render() {
    const { bidderValue, bidderChoices, creativeValue } = this.props;

    return (
      <section className="marg-t-lg marg-b-lg">
        <SelectInput label="Bidder" choices={bidderChoices} value={bidderValue} onChange={this.bidderChange}/>
        <TextInput label="Creative ID" placeholder="Enter Creative ID" value={creativeValue} onChange={this.creativeChange}/>
      </section>
    );
  }
}
export default Bidders;
