
import React from 'react'
import ReactDOM from 'react-dom'
import MAinApp from './components/MainApp'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
<Provider store ={createStoreWithMiddleware(reducers)}>
<MAinApp/>
</Provider>
,
    document.getElementById('app')
    )