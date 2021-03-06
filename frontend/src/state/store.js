import { createStore, combineReducers,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {userLoginReducer,userRegisterReducer} from './reducer/userReducer'
import {roomDetailsReducers} from './reducer/roomDetailsReducers'


const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
}
const reducers = combineReducers({
    userLogin:userLoginReducer,
    roomDetails:roomDetailsReducers,
    userRegister:userRegisterReducer
})

const middleware=[thunk]

const store=createStore(reducers,initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store