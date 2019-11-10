import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Header } from './Header';
import TaskCreatorContainer from './TaskCreator/TaskCreatorContainer';
import TasksListContainer from './TasksList/TasksListContainer';
import { Footer } from './Footer';

import rootReducer from '../store/reducers';

const store = createStore(rootReducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <Header />

                    <TaskCreatorContainer />

                    <TasksListContainer />

                    <Footer />
                </>
            </Provider>
        )
    }
}