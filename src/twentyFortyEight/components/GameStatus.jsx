import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class GameStatus extends Component{

    static Proptypes = {
        availableMoves: PropTypes.any.isRequired
    };

    render(){
        return(
            <p>{this.props.availableMoves  ? 'Go, go, go!' : 'Game over'}</p>
        )
    }
}