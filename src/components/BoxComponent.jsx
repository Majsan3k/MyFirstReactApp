import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class BoxComponent extends Component{

    state = {
        clicked : false
    };

    static propTypes = {
      value: PropTypes.number
    };


    handleCollision = (otherComponentValue) => {
        this.setState(prevState => {
            return {value: prevState.value + otherComponentValue}

        });
    };

    resetBox = () => {
        this.setState({value: ''})
    };

    render(){
        return (
            <div className="box-not-clicked">
                <p>{this.props.value}</p>
            </div>
        )
    }
}