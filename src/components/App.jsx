import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Header } from './Header';
import CreatorContainer from './Creator/CreatorContainer';
import ListContainer from './List/ListContainer';
import FooterContainer from './Footer/FooterContainer';

import rootReducer from '../store/reducers';

const store = createStore(rootReducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <Header />

                    <CreatorContainer />

                    <ListContainer />

                    <FooterContainer />
                </>
            </Provider>
        )
    }
}