import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component{

    static propTypes = {
        checkSecretCard: PropTypes.func.isRequired,
        code: PropTypes.string.isRequired
    };

    checkSecretCard = () => {
        console.log(this.props.code);
      this.props.checkSecretCard(this.props.code);
    };

    render() {
        return (
            <img onClick={this.checkSecretCard} className='card' alt='Card' src={this.props.src}/>
        )
    }
}