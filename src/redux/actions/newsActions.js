import axios from 'axios'
import * as Constants from '../../constants/Constants'
export const loadNews = () =>{
    return (dispatch, getState) => {
        dispatch({type:Constants.CONSTANTS.STATUS.LOAD_NEWS_START})
        axios.get(Constants.CONSTANTS.URLS.TOP_HEADLINES).then(
            function(response){
                dispatch({type:Constants.CONSTANTS.STATUS.LOAD_NEWS_SUCCESS, payload:response.data})
            }).catch(function(error){
                dispatch({type:Constants.CONSTANTS.STATUS.LOAD_NEWS_FAILURE, payload:error})
            })
    }
}