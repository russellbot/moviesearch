import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED 
} from './constants.js';

export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text    
})

export const requestMovies = () => (dispatch) => {
    dispatch({ type: REQUEST_MOVIES_PENDING});
    fetch('https://www.omdbapi.com/?s=star+wars&apikey=469942e0')
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_MOVIES_SUCCESS, payload: data.Search }))
        .catch(error => dispatch({ type: REQUEST_MOVIES_FAILED, payload: error }))
}