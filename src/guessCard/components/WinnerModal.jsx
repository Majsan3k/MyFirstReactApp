import React, {Component} from 'react'
import './winnerModal.css'

export default class WinnerModal extends Component {

    restart = () => {
        this.props.restart();
    };

    quit = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="modal-scrollable">
                <div className="modal-backdrop"></div>
                <div className="modal-main">
                    <div className="modal-body">
                        <h3>Congratulations, you won! Do you want to play again?</h3>
                        <button className="btn" onClick={this.restart}>Yes, give me another round</button>
                        <button className="btn" onClick={this.quit}>No, I'm fine</button>
                    </div>
                </div>

            </div>
        );

    }
}
