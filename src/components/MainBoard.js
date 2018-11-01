import React, {Component} from 'react';
import GameBoard from "./GameBoard";
import ResetBtn from "./ResetBtn";

export default class MainBoard extends Component{

    state = {
        availableMoves: true,
        components: [],
        boxClicked: false
    };

    componentWillMount(){
        this.setComponents();
    }

    setComponents = () => {
        let newComponents = [];

        for(let i = 0; i < 16; i++){
            newComponents.push({value: ''})
        }

        let firstRandomBox = Math.floor(Math.random() * 16);
        let secondRandomBox = Math.floor(Math.random() * 16);

        while(secondRandomBox === firstRandomBox){
            secondRandomBox = Math.floor(Math.random() * 16);
        }

        newComponents[firstRandomBox].value = 2;
        newComponents[secondRandomBox].value = 2;


        this.setState({components: newComponents});
    };

    render(){
        return (
            <div>
                <ResetBtn reset={this.setComponents}/>
                <GameBoard components={this.state.components}/>
            </div>
        )
    }
}