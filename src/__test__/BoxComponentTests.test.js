import React from 'react';
import BoxComponent from '../twentyFortyEight/components/BoxComponent';
import {render, fireEvent, cleanup} from 'react-testing-library';
import {mount} from 'enzyme'
import 'jest-dom/extend-expect'
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('BoxComponent', () => {

    let box;
    let handleBoxClicked;

    beforeEach(() => {
        handleBoxClicked = jest.fn();
        const {container} = render(<BoxComponent
            value={'2'}
        />);
        box = container.querySelector('div');
    });

    afterEach(cleanup);

    it('should render correctly', () => {
        const {container} = render(<BoxComponent
            id={1}
            value={'2'}
            handleCollision={() => jest.fn()}
            boxClicked={''}
        />);
        expect(container).toMatchSnapshot();
    });
});

/* OLD TESTS - Used when a box still was clickable */

    /*
    it('should change class while clicked', () => {
        expect(box).toHaveClass('box not-clicked');
        fireEvent.click(box);
        expect(box).toHaveClass('box clicked');
    });

    it('should call handleBoxClicked while clicked', () => {
        fireEvent.click(box);
        expect(handleBoxClicked.mock.calls.length).toBe(1);
    });

    it('should call handleBoxClicked while clicked, test with enzyme-mount', () => {

        const handleBoxClickedMount = jest.fn();
        const wrapper = mount(<BoxComponent
            value={'2'}
            resetBoxClicked={jest.fn()}
            handleBoxClicked={handleBoxClickedMount}
            boxClicked={''}
        />);

        const spy = jest.spyOn(wrapper.instance(), 'handleClick');
        wrapper.instance().forceUpdate();
        wrapper.update();

        wrapper.find('div').simulate('click');
        expect(handleBoxClickedMount.mock.calls.length).toBe(1);

        expect(spy).toHaveBeenCalled();
    }); */
