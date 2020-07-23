import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED 
} from './constants.js';

const initialStateSearch = {
    searchField: ''
}

export const searchMovies = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateMovies = {
    isPending: false,
    movies: [],
    error: ''
}

export const requestMovies = (state=initialStateMovies, action={}) => {
    switch(action.type) {
        case REQUEST_MOVIES_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_MOVIES_SUCCESS:
            return Object.assign({}, state, { movies: action.payload, isPending: false })
        case REQUEST_MOVIES_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}