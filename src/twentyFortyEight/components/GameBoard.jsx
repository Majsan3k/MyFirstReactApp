import React, {Component} from 'react';
import BoxComponent from "./BoxComponent";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class GameBoard extends Component{

    static propTypes = {
        components: PropTypes.array.isRequired
    };

    render(){
        return (
            <div className="GameBoard">
                {this.props.components.map((box) =>
                    <BoxComponent id={box.id}
                                  key={box.id}
                                  value={box.value}
                                  lastMove={this.props.lastMove}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    components: state.twentyFortyEight.components,
    lastMove: state.twentyFortyEight.lastMove
});

export default connect(mapStateToProps, null)(GameBoard)