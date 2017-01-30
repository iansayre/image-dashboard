/**
 * Created by PankajK1 on 11/25/2015.
 */
import React, { Component, PropTypes } from 'react';
import BSDropdown from '../../bootstrap/BSDropdown.js';
import Dropdown from './Dropdown.js';
import DropdownButton from './DropdownButton.js';
import DropdownLink from './DropdownLink.js';
import DropdownDivider from './DropdownDivider.js';


class DropdownMenu extends Component {

  static propTypes = {
    label: PropTypes.node.isRequired,
    menuItems: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({type: PropTypes.oneOf(['divider'])}),
        PropTypes.shape({
          type: PropTypes.oneOf(['link']),
          label: PropTypes.string.isRequired,
          linkTo: PropTypes.string.isRequired,
        }),
        PropTypes.shape({
          type: PropTypes.oneOf(['button']),
          label: PropTypes.string.isRequired,
          clickId: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
          ]),
        }),
      ])
    ),
  };

  static defaultProps = {
    label: 'A Dropdown',
  };

  renderItems() {
    return this.props.menuItems.map((menuItem, index) => {
      const {type, ...props} = menuItem;
      if (type === 'button') {
        return <DropdownButton {...props} key={`item-${index}`} />;
      } else if (type === 'link') {
        return <DropdownLink linkTo={props.linkTo} key={`item-${index}`}>{props.label}></DropdownLink>;
      } else {
        return <DropdownDivider  key={`item-${index}`}/>;
      }
    });
  }

  render() {
    return (
      <Dropdown label={this.props.label}>
        {this.renderItems()}
      </Dropdown>
    );
  }
}

export default DropdownMenu;
