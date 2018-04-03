import React from 'react'
//import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {createStore } from 'redux'
import { Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
//import thunk from 'redux-thunk'
//import promise from 'redux-promise'
//import logger from 'redux-logger'
import App from './components/routers/Router';
import reducer from './actions/actions';
const store=createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
  	<Provider store={store}>
    	<App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
