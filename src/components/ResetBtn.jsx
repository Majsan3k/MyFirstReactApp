import React, {Component} from 'react';

export default class ResetBtn extends Component {

    handleOnClick = () => {
        this.props.reset();
    };

    render(){
        return (
            <button className="reset-btn" onClick={this.handleOnClick}>Reset</button>
        )
    }
}