import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ResetBtn extends Component {

    static propTypes = {
        reset: PropTypes.func.isRequired
    };

    handleOnClick = () => {
        this.props.reset();
    };

    render(){
        return (
            <button className="reset-btn" onClick={this.handleOnClick}>Reset</button>
        )
    }
}