import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'
import MainBoard from "./components/MainBoard";

class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">
                    <div>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/2048">2048</Link></li>
                            </ul>
                            <Route exact path="/2048" component={MainBoard}/>
                        </header>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
