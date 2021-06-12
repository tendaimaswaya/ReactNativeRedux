import * as Constants from '../../constants/Constants'
let initialState = {
    news:[],
    isLoading:true,
    error:null
}

export default newsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case Constants.CONSTANTS.STATUS.LOAD_NEWS_START:
            return Object.assign({}, state, { isLoading: true })
        case Constants.CONSTANTS.STATUS.LOAD_NEWS_SUCCESS:
            return Object.assign({}, state, { news: action.payload, isLoading: false })
        case Constants.CONSTANTS.STATUS.LOAD_NEWS_FAILURE:
            return Object.assign({}, state, { error: action.payload, isLoading: false })
        default:
            return state    
    }
}