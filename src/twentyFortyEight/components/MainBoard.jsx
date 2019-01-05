import React, {Component} from 'react';
import GameBoard from "./GameBoard";
import ResetBtn from "./ResetBtn";
import GameStatusModal from "./GameStatusModal";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateComponents, changeMove} from '../../actions/twentyFortyEightActions';

class MainBoard extends Component {

    state = {
        availableMoves: true,
        round: 0,
    };

    componentWillMount() {
        this.setComponents();
        document.addEventListener("keyup", this.handleKeyPress)
    }

    handleKeyPress = (e) => {
        switch (e.keyCode) {
            case 37:
                this.handleKeyLeft();
                break;
            case 38:
                this.handleKeyUp();
                break;
            case 39:
                this.handleKeyRight();
                break;
            case 40:
                this.handleKeyDown();
                break;
            default:
                break;
        }
    };

    handleKeyRight = () =>{
        let moved = false;
        let merged = false;
        let newComponents = this.props.components.slice();

        for(let i = 3; i < newComponents.length; i +=4){
            for(let j = i; j > i-3; j--){
                if(newComponents[j].value === '' && newComponents[j-1].value !== ''){
                    newComponents[j].value = newComponents[j-1].value;
                    newComponents[j-1].value = '';
                    j = i+1;
                    moved = true;
                }
            }
        }


        for (let i = 3; i < newComponents.length; i+= 4) {
            for (let j = i; j > i-3; j--) {
                if (newComponents[j].value !== '' && newComponents[j].value === newComponents[j-1].value) {
                    newComponents[j].value *= 2;
                    newComponents[j-1].value = '';
                    moved = true;
                    merged = true;
                }
            }
        }

        if(merged) {
            for (let i = 3; i < newComponents.length; i += 4) {
                for (let j = i; j > i - 3; j--) {
                    if (newComponents[j].value === '' && newComponents[j - 1].value !== '') {
                        newComponents[j].value = newComponents[j - 1].value;
                        newComponents[j - 1].value = '';
                        j = i + 1;
                    }
                }
            }
        }

        if(moved) {
            newComponents = this.addTwoRandomComponents(newComponents);
            this.props.changeMove(newComponents, 'right');
        }
    };

    handleKeyLeft = () =>{
        let moved = false;
        let merged = false;
        let newComponents = this.props.components.slice();

        for(let i = 0; i < newComponents.length - 3; i +=4){
            for(let j = i; j < i+3; j++){
                if(newComponents[j].value === '' && newComponents[j+1].value !== ''){
                    newComponents[j].value = newComponents[j+1].value;
                    newComponents[j+1].value = '';
                    j = i-1;
                    moved = true;
                }
            }
        }

        for (let i = 0; i < newComponents.length -3; i+= 4) {
            for (let j = i; j < i+3; j++) {
                if (newComponents[j].value !== '' && newComponents[j].value === newComponents[j+1].value) {
                    newComponents[j].value *= 2;
                    newComponents[j+1].value = '';
                    moved = true;
                    merged = true;
                }
            }
        }

        if(merged) {
            for (let i = 0; i < newComponents.length - 3; i += 4) {
                for (let j = i; j < i + 3; j++) {
                    if (newComponents[j].value === '' && newComponents[j + 1].value !== '') {
                        newComponents[j].value = newComponents[j + 1].value;
                        newComponents[j + 1].value = '';
                        j = i - 1;
                    }
                }
            }
        }

        if(moved) {
            newComponents = this.addTwoRandomComponents(newComponents);
            this.props.changeMove(newComponents, 'left');
        }
    };

    handleKeyDown = () => {
        let moved = false;
        let merged = false;
        let newComponents = this.props.components.slice();

        for (let i = 12; i < newComponents.length; i++) {
            for (let j = i; j >= i-8; j -= 4) {
                if (newComponents[j].value === '' && newComponents[j-4].value !== '') {
                    newComponents[j].value = newComponents[j-4].value;
                    newComponents[j-4].value = '';
                    j=i+4;
                    moved = true;
                }
            }
        }

        for (let i = 12; i < newComponents.length; i++) {
            for (let j = i; j >= i-8; j -= 4) {
                if (newComponents[j].value !== '' && newComponents[j].value === newComponents[j-4].value) {
                    newComponents[j].value *= 2;
                    newComponents[j-4].value = '';
                    moved = true;
                    merged = true;
                }
            }
        }

        if(merged) {
            for (let i = 12; i < newComponents.length; i++) {
                for (let j = i; j >= i - 8; j -= 4) {
                    if (newComponents[j].value === '' && newComponents[j - 4].value !== '') {
                        newComponents[j].value = newComponents[j - 4].value;
                        newComponents[j - 4].value = '';
                        j = i + 4;
                    }
                }
            }
        }

        if(moved) {
            newComponents = this.addTwoRandomComponents(newComponents);
            this.props.changeMove(newComponents, 'down');
        }
    };

    handleKeyUp = () => {
        let moved = false;
        let merged = false;
        let newComponents = this.props.components.slice();

        for (let i = 0; i < 4; i++) {
            for (let j = i; j <= i+8; j += 4) {
                if (newComponents[j].value === '' && newComponents[j+4].value !== '') {
                    newComponents[j].value = newComponents[j+4].value;
                    newComponents[j+4].value = '';
                    j=i-4;
                    moved = true;
                }
            }
        }

        for (let i = 0; i < 4; i++) {
            for (let j = i; j <= i+8; j += 4) {
                if (newComponents[j].value !== '' && newComponents[j].value === newComponents[j+4].value) {
                    newComponents[j].value *= 2;
                    newComponents[j+4].value = '';
                    moved = true;
                    merged = true;
                }
            }
        }

        if(merged) {
            for (let i = 0; i < 4; i++) {
                for (let j = i; j <= i + 8; j += 4) {
                    if (newComponents[j].value === '' && newComponents[j + 4].value !== '') {
                        newComponents[j].value = newComponents[j + 4].value;
                        newComponents[j + 4].value = '';
                        j = i - 4;
                    }
                }
            }
        }
        if(moved) {
            newComponents = this.addTwoRandomComponents(newComponents);
            this.props.changeMove(newComponents, 'up');
        }
    };

    checkAvailableMoves = (currentBoard) => {
        let components = currentBoard.slice();

        for (let i = 0; i < components.length - 3; i+=4) {
            for(let j=i; j < i+4; j++) {
                if (components[j].value === '') {
                    return true;
                }
                if(j < i+3 && components[j].value === components[j+1].value){
                    return true;
                }
                if(j > i && components[j].value === components[j-1].value){
                    return true;
                }
                if(j < 12  && components[j].value === components[j+4].value){
                    return true;
                }
                if(j > 3 && components[j].value === components[j-4].value){
                    return true;
                }
            }
        }
        return false;
    };

    addTwoRandomComponents = (components) => {
        let newComponents = components.slice();
        let availableBoxes = [];

        for (let i = 0; i < newComponents.length; i++) {
            if (newComponents[i].value === '') {
                availableBoxes.push(newComponents[i].id);
            }
        }

        let numberOfAvailableBoxes = availableBoxes.length;

        if(numberOfAvailableBoxes > 0) {
            let firstRandomBox = Math.floor(Math.random() * numberOfAvailableBoxes);

            firstRandomBox = availableBoxes[firstRandomBox];
            newComponents[firstRandomBox].value = 2;

            if (numberOfAvailableBoxes > 1) {
                let secondRandomBox = Math.floor(Math.random() * numberOfAvailableBoxes);
                while (secondRandomBox === firstRandomBox) {
                    secondRandomBox = Math.floor(Math.random() * numberOfAvailableBoxes);
                }
                secondRandomBox = availableBoxes[secondRandomBox];
                newComponents[secondRandomBox].value = (this.state.round > 5 && this.state.round % 2 === 0) ? 4 : 2;
            }

            let availableMoves = this.checkAvailableMoves(newComponents);

            this.setState({availableMoves: availableMoves});
        }else{
            let availableMoves = this.checkAvailableMoves(newComponents);
            this.setState({availableMoves: availableMoves});
        }
        return newComponents;
    };

    setComponents = () => {
        let newComponents = [];

        for (let i = 0; i < 16; i++) {
            newComponents.push({id: i, clicked: false, value: ''})
        }

        /*
        newComponents[15].value = 1;
        newComponents[13].value = 3;
        newComponents[12].value = 5;
        newComponents[11].value = 6;
        newComponents[10].value = 7;
        newComponents[5].value = 17;
        newComponents[6].value = 9;
        newComponents[7].value = 10;
        newComponents[8].value = 11;
        newComponents[9].value = 12;
        newComponents[14].value = 13;
        newComponents[4].value = 14;
        newComponents[3].value = 15;
        */

        let firstRandomBox = Math.floor(Math.random() * 16);
        let secondRandomBox = Math.floor(Math.random() * 16);

        while (secondRandomBox === firstRandomBox) {
            secondRandomBox = Math.floor(Math.random() * 16);
        }

        newComponents[firstRandomBox].value = 2;
        newComponents[secondRandomBox].value = 2;

        this.setState({availableMoves: true, round: 1});

        this.props.updateComponents(newComponents);
    };

    render() {
        return (
            <div>
                {!this.state.availableMoves && <GameStatusModal reset={this.setComponents}/>}
                <ResetBtn reset={this.setComponents}/>
                <GameBoard />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    components: state.twentyFortyEight.components
});


const mapDispatchToProps = dispatch => ({
    updateComponents: bindActionCreators(updateComponents, dispatch),
    changeMove: bindActionCreators(changeMove, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBoard);