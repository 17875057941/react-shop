import { combineReducers } from 'redux'

import {storage,payment,cookie} from './actions'
export  default combineReducers({
    storage,//reducer 管理localStorage
    payment,//reducer //管理结算
    cookie
})