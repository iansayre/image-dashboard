/**
 * Created by PankajK1 on 12/18/2015.
 */

import React, { PropTypes, Component } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';

class BSModalCloseButton extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired
    };
    static defaultProps = {
        onClose: emptyFunction
    };

    render() {
        return (
            <button type="button" className="close"
                    aria-label="Close" onClick={this.props.onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}

export default BSModalCloseButton;
