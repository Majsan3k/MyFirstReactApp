import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class GameStatusModal extends Component{

 render(){
     return ReactDOM.createPortal(
         (<div className="modal">
                 <p className="modal-box">GAME OVER</p>
                 <button className="try-again-btn" onClick={this.props.reset}>Try again</button>
         </div>
         ),
         document.body);
 }
}