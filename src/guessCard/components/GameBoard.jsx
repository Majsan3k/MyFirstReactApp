import React, {Component} from 'react';
import Card from './Card';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {updateDeck, updateSecretCard} from "../../actions/guessCardActions";
import WinnerModal from "./WinnerModal";

class GameBoard extends Component {

    static propTypes = {
        cards: PropTypes.array.isRequired,
        secretCard: PropTypes.object.isRequired
    };

    state = {
        winner: false
    };

    componentWillMount() {
        this.updateDeck();
    }

    restart = () => {
        this.setState({winner: false}, this.updateDeck());
    };

    checkSecretCard = card => {
        if (card === this.props.secretCard.code) {
            this.setState({winner: true})
        }
    };

    updateDeck = () => {
        let index = Math.floor(Math.random() * 4);
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4')
            .then(res => res.json())
            .then(posts => this.props.updateDeck(posts))
            .then(posts => this.props.updateSecretCard(posts.payload.cards[index]));
    };

    render() {
        return (
            <div>
                {this.state.winner &&
                    <WinnerModal
                        history={this.props.history}
                        restart={this.restart}
                    />}
                <button onClick={this.updateDeck}>Shuffle</button>
                <div className='card-holder'>
                    {this.props.cards.map((card, index) =>
                        <Card src={card.images.png}
                              code={card.code}
                              key={index}
                              checkSecretCard={this.checkSecretCard}
                        />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cards: state.guessCard.deck.cards,
    secretCard: state.guessCard.secretCard
});

const mapDispatchToProps = dispatch => ({
    updateDeck: bindActionCreators(updateDeck, dispatch),
    updateSecretCard: bindActionCreators(updateSecretCard, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)