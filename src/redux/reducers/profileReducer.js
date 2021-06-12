import * as Constants from '../../constants/Constants'
let initialState = {
    profile:{},
    isLoading:true,
    error:null
}

export default profileReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case Constants.CONSTANTS.STATUS.LOAD_PROFILE_START:
            return Object.assign({}, state, { isLoading: true })
        case Constants.CONSTANTS.STATUS.LOAD_PROFILE_SUCCESS:
            return Object.assign({}, state, { profile: action.payload, isLoading: false })
        case Constants.CONSTANTS.STATUS.LOAD_PROFILE_FAILURE:
            return Object.assign({}, state, { error: action.payload, isLoading: false })
        default:
            return state    
    }
}