import { combineReducers } from 'redux'

import {storage} from './Storage'
import {cookie} from './Cookies'
import {payment} from './Payment'

export  default combineReducers({
    storage,//reducer 管理localStorage
    payment,//reducer //管理结算
    cookie
})