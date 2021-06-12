import axios from 'axios'
import * as Constants from '../../constants/Constants'
export const fetchProfile = () =>{
    return (dispatch, getState) => {
        dispatch({type:Constants.CONSTANTS.STATUS.LOAD_PROFILE_START})
        axios.get(Constants.CONSTANTS.URLS.USER_PROFILE).then(
            function(response){
                dispatch({type:Constants.CONSTANTS.STATUS.LOAD_PROFILE_SUCCESS, payload:response.data})
            }).catch(function(error){
                dispatch({type:Constants.CONSTANTS.STATUS.LOAD_PROFILE_FAILURE, payload:error})
            })
    }
}

export const resetProfile = ()=>{
    return(dispatch, getState) => {
        dispatch({type:Constants.CONSTANTS.STATUS.RESET_PROFILE_SUCCESS, payload:{} })
    }
}