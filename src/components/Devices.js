import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';
import TextInput from './Forms/TextInput';


class Devices extends Component {
  static propTypes = {
    deviceIdChange: PropTypes.func,
    deviceIdValue: PropTypes.string,
    deviceTypeChoices: PropTypes.arrayOf(PropTypes.object),
    deviceTypeChange: PropTypes.func,
    deviceTypeValue: PropTypes.string
  };
  static defaultProps = {
    deviceIdChange: () => {},
    deviceTypeChange: () => {}
  };

  constructor(props) {
    super(props);
    this.deviceIdChange = this.deviceIdChange.bind(this);
    this.deviceTypeChange = this.deviceTypeChange.bind(this);
  }

  deviceIdChange(event) {
    this.props.deviceIdChange(event);
  }

  deviceTypeChange() {
    this.props.deviceTypeChange(this.refs.select.value);
  }

  render() {
    const { deviceIdValue, deviceTypeChoices, deviceTypeValue } = this.props;

    const selectClass = classnames(
      BSUtils.formControlClass,
      BSUtils.getFormControlSizeClass(this.props.size),
      BSUtils.getValidFormControlClass(this.props.validState)
    );

    const labelClass = classnames(
      BSUtils.formControlLabelClass,
      {'sr-only': this.props.hideLabel}
    );

    const wrapperClass = classnames(
      BSUtils.formGroupClass,
      BSUtils.getValidFormGroupClass(this.props.validState),
    );

    const deviceOptions = deviceTypeChoices.map((choice) => {
      return (
        <option key={choice.id} value={choice.displayName}>
          {choice.displayName}
        </option>
      );
    });

    return (
      <section className="marg-t-lg marg-b-lg">
        <TextInput label="Device ID" placeholder="Enter Device ID" value={deviceIdValue} onChange={this.deviceIdChange}/>
        <div className={wrapperClass}>
          <label className={labelClass}>Device Type</label>
          <div className="col-xs-8">
            <select className={selectClass} ref="select" value={deviceTypeValue} onChange={this.deviceTypeChange}>
              {deviceOptions}
            </select>
          </div>
        </div>
      </section>
    );
  }
}
export default Devices;
