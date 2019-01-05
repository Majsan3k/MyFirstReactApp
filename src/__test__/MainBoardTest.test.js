
/* Test used before I moved MainBoard to Redux */

/*
import React from 'react';
import MainBoard from '../twentyFortyEight/components/MainBoard';
import { mount } from 'enzyme'

describe('MainBoard', () => {

    let components = [];
    let wrapper;

    for(let i = 0; i < 16; i++){
        if(i === 4 || i === 7){
            components.push({id: i, clicked: false, value: '2'})
        }else {
            components.push({id: i, clicked: false, value: ''})
        }
    }

    wrapper = mount(<MainBoard />);
    wrapper.setState({components: components});

    beforeEach(() => {

    });


    it('should call right handleKey functions when key is pressed', () => {

        const spyLeft = jest.spyOn(wrapper.instance(), 'handleKeyLeft');
        const spyUp = jest.spyOn(wrapper.instance(), 'handleKeyUp');
        const spyRight = jest.spyOn(wrapper.instance(), 'handleKeyRight');
        const spyDown = jest.spyOn(wrapper.instance(), 'handleKeyDown');

        expect(spyLeft).not.toHaveBeenCalled();
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 37, bubbles: true}));
        expect(spyLeft).toHaveBeenCalled();

        expect(spyUp).not.toHaveBeenCalled();
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 38, bubbles: true}));
        expect(spyUp).toHaveBeenCalled();


        expect(spyRight).not.toHaveBeenCalled();
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 39, bubbles: true}));
        expect(spyRight).toHaveBeenCalled();

        expect(spyDown).not.toHaveBeenCalled();
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 40, bubbles: true}));
        expect(spyDown).toHaveBeenCalled();
    });

    it('should move components to the left while key left is pressed', () => {
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 37, bubbles: true}));

        let expectedComponents = [];

        for(let i = 0; i < 16; i++){
            if(i === 4){
                expectedComponents.push({id: i, clicked: false, value: 4})
            }else {
                expectedComponents.push({id: i, clicked: false, value: ''})
            }
        }

        let wrapperComponents = wrapper.instance().state.components;

        expect(wrapperComponents).toEqual(expectedComponents);

    })
});*/
