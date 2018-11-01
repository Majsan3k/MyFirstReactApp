import React, {Component} from 'react';
import BoxComponent from "./BoxComponent";

export default class GameBoard extends Component{

    state = {
      availableMoves: true,
      boxClicked: false
    };

    render(){
        return (
            <div className="GameBoard">
                {this.props.components.map(box =>
                    <BoxComponent key={box.key} value={box.value}/>
                )}
            </div>
        )
    }
}