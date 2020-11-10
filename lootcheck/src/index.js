import React from 'react'
import { render } from "react-dom"
import App from './components/App/App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./reducers"
import { Provider } from 'react-redux'
import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
	<Provider store={store}><App /></Provider>, 
	document.getElementById('root')
)