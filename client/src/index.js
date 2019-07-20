import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';
import axios from './config/config'

import { Provider } from 'react-redux'
// to handle page reload
import { setUser } from './actions/user'

import configureStore from './store/configureStore'
const store = configureStore()

store.subscribe(() => {
    console.log('redux store state', store.getState())
})

console.log(store.getState())

// user reloaded page
if (localStorage.getItem('userAuthToken')) {
    axios.get('/users/account', {
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
        .then(response => {
            store.dispatch(setUser(response.data))
        })
}

const jsx = (
    <Provider store={store}>
       <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));


