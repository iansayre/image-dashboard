import React, { Component, PropTypes } from 'react';
import SelectInput from './Forms/SelectInput';
import TextInput from './Forms/TextInput';

class Advertisers extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    const advertiserChoices = [
      {id: 0, displayName: '-'},
      {id: 1, displayName: 'System'},
      {id: 2, displayName: 'will'},
      {id: 3, displayName: 'fill'},
      {id: 4, displayName: 'this'}
    ];

    const brandChoices = [
      {id: 0, displayName: '-'},
      {id: 1, displayName: 'System'},
      {id: 2, displayName: 'will'},
      {id: 3, displayName: 'fill'},
      {id: 4, displayName: 'this'}
    ];

    return (
      <section className="marg-b-lg">
        <SelectInput id="filter-input-advertiser" label="Advertiser" choices={advertiserChoices}/>
        <SelectInput id="filter-input-brand" label="Brand" choices={brandChoices}/>
      </section>
    );
  }
}
export default Advertisers;
