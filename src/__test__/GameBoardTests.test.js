import React from 'react';
import GameBoard from '../twentyFortyEight/components/GameBoard';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer'
import {Provider} from 'react-redux';
import {shallow} from 'enzyme'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('GameBoard', () => {

    let components = [];
    let store;
    for (let i = 0; i < 16; i++) {
        if (i === 4 || i === 7) {
            components.push({id: i, clicked: false, value: '2'})
        } else {
            components.push({id: i, clicked: false, value: ''})
        }
    }

    const initialState = {
        twentyFortyEight: {components: components, lastMove: ''}
    };

    beforeEach(() => {
        store = createStore(rootReducer, initialState);
    });

    it('should render correctly', () => {
        let container = renderer.create(<Provider store={store}><GameBoard components={components}/></Provider>)
            .toJSON();

        let wrapper = shallow(<Provider store={store}><GameBoard components={components}/></Provider>);
        expect(container).toMatchSnapshot();
    });
});