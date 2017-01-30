/**
 * Created by chetanv on 27/11/15.
 */

import React, { Component, PropTypes, Children } from 'react';
import Table from './Table.js';

class ColumnSortTable extends Component {

  static propTypes = {
    sortOrderRenderer: PropTypes.func,
  };
  static defaultProps = {
    sortOrderRenderer: (order) => {
      if(order === 'ASC') {
        return <span>{'^'}</span>;
      } else if(order === 'DESC') {
        return <span>{'v'}</span>;
      } else {
        return <span></span>;
      }
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      sortOn: '',
      sortDir: 'ASC',
      sortType: 'text',
    };
    this.sortTable = this.sortTable.bind(this);
    this.sortOn = this.sortOn.bind(this);
  }

  render() {
    let index = 0;
    const _this = this;
    const children = Children.map(this.props.children, (child) => {
      if(child.props.columnKey === this.state.sortOn || index === this.state.sortOn) {
        return React.cloneElement(child, {
          label: (
            <div>
              {child.props.label}
              {_this.props.sortOrderRenderer(_this.state.sortDir)}
            </div>
          )
        })
      } else {
        return child;
      }
    });

    return (
      <Table {...this.props} sort={this.sortTable} onHeaderClick={this.sortOn}>
        {children}
      </Table>
    );
  }

  sortTable(row1, row2) {
    let { sortOn, sortDir, sortType } = this.state;

    let val1 = row1[this.state.sortOn];
    let val2 = row2[this.state.sortOn];

    if(sortType === 'number') {
      if(typeof val1 === 'string') {
        val1 = parseFloat(val1.replace(',', ''));
      }
      if(typeof val2 === 'string') {
        val2 = parseFloat(val2.replace(',', ''));
      }
    }


    if(sortOn) {
      return sortDir === 'ASC' ?
        (val1 <= val2 ? -1 : 1) :
        (val1 > val2 ? -1 : 1)
        ;
    }
    return 0;
  }

  sortOn(col, type) {
    let { sortOn, sortDir } = this.state;
    if(col === sortOn) {
      switch(sortDir) {
        case 'ASC': sortDir = 'DESC'; break;
        case 'DESC': sortOn = ''; break;
        default: sortDir = 'ASC'; break;
      }
    } else {
      sortOn = col;
      sortDir = 'ASC';
    }

    this.setState({
      sortOn,
      sortDir,
      sortType: type,
    });
  }
}

export default ColumnSortTable;