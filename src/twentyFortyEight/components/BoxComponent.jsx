import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class BoxComponent extends Component {

    state = {
        value: this.props.value,
        id: this.props.id
    };

    static propTypes = {
        id: PropTypes.number.isRequired,
        value: PropTypes.any.isRequired,
        lastMove: PropTypes.string.isRequired
    };

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({value: this.props.value, clicked: false});
        }
    };

    render() {
        let classNames = require('classnames');
        let boxClass = classNames('box', {'no-value': this.state.value === ''});

        return (
            <div className={boxClass}>
                {this.state.value > 0 && <p>{this.state.value}</p>}
            </div>
        )
    }
}