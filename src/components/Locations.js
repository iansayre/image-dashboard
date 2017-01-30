import React, { Component, PropTypes } from 'react';
import LocationOptions from '../utils/LocationOptions.js';
import SelectInput from './Forms/SelectInput';
import TextInput from './Forms/TextInput';


class Locations extends Component {
  static propTypes = {
    stateChange: PropTypes.func,
    stateValue: PropTypes.string,
    countryChange: PropTypes.func,
    countryValue: PropTypes.string,
    dmaChange: PropTypes.func,
    dmaValue: PropTypes.string,
    cityChange: PropTypes.func,
    cityValue: PropTypes.string,
    zipChange: PropTypes.func,
    zipValue: PropTypes.string
  };

  static defaultProps = {
    stateChange: () => {},
    countryChange: () => {},
    dmaChange: () => {},
    cityChange: () => {},
    zipChange: () => {}
  };

  constructor(props) {
    super(props);
    this.stateChange = this.stateChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.dmaChange = this.dmaChange.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.zipChange = this.zipChange.bind(this);
  }

  stateChange(event) {
    this.props.stateChange(event);
  }

  countryChange(event) {
    this.props.countryChange(event);
  }

  dmaChange(event) {
    this.props.dmaChange(event);
  }

  cityChange(event) {
    this.props.cityChange(event);
  }

  zipChange(event) {
    this.props.zipChange(event);
  }

  render() {
    const { stateValue, countryValue, dmaValue, cityValue, zipValue } = this.props;

    return (
      <section className="marg-t-lg marg-b-lg">
        <SelectInput label="Country" choices={LocationOptions.countryChoices} value={countryValue} onChange={this.countryChange}/>
        <SelectInput label="State" choices={LocationOptions.stateChoices} value={stateValue} onChange={this.stateChange}/>
        <SelectInput label="DMA" choices={LocationOptions.dmaChoices} value={dmaValue} onChange={this.dmaChange}/>
        <TextInput label="City" placeholder="Enter City" value={cityValue} onChange={this.cityChange}/>
        <TextInput label="Zip Code" placeholder="Enter Zip Code" value={zipValue} onChange={this.zipChange}/>
      </section>
    );
  }
}
export default Locations;
