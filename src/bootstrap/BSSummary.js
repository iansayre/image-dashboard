/**
 * Created by chetanv on 23/11/15.
 */

import React, { PropTypes, Component } from 'react';
import SummaryItem from '../components/SummaryItem.js';

class Summary extends Component {
  static propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        iconId: PropTypes.string,
      })
    ),

    onItemClick: PropTypes.func,
  };

  static defaultProps = {
    stats: [],
    onItemClick: () => {}
  };

  constructor(props) {
    super(props);
    this.itemClicked = this.itemClicked.bind(this);
  }

  render() {

    const items = this.props.stats.map(item => {
      return (
        <div className="col col-xs-6 col-sm-4 col-md-3 col-lg-2" key={item.id}>
          <SummaryItem
            id={item.id}
            title={item.title}
            value={item.value}
            iconId={item.iconId}
            onClick={this.itemClicked}
            />
        </div>
      );
    });

    return (
      <div className="row">
        {items}
      </div>
    );
  }

  itemClicked(itemId) {
    this.props.onItemClick(itemId);
  }
}

export default Summary;