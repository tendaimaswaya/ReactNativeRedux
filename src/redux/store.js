import {createStore, applyMiddleware, combineReducers} from 'redux'
import newsReducer from './reducers/newsReducer'
import profileReducer from './reducers/profileReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers(
    {
        newsReducer, 
        profileReducer
    })
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store