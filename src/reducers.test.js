import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED 
} from './constants.js';

import * as reducers from './reducers';

describe('searchMovies', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchMovies(undefined, {})).toEqual({ searchField: ''})
    })

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchMovies(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc'})
    })
})

describe('reqestMovies', () => {
    const initialStateMovies = {
        movies: [],
        isPending: false,
        error: ''
    }

    it('should return the initial state', () => {
        expect(reducers.requestMovies(undefined, {})).toEqual(initialStateMovies)
    })

    it('should handle REQUEST_MOVIES_PENDING action', () => {
        expect(reducers.requestMovies(initialStateMovies, {
            type: REQUEST_MOVIES_PENDING
        })).toEqual({
            movies: [],
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_MOVIES_SUCCESS action', () => {
        expect(reducers.requestMovies(initialStateMovies, {
            type: REQUEST_MOVIES_SUCCESS,
            payload: [{
                imdbID: '123',
                Title: 'test',
                Year: '1984'
            }]
        })).toEqual({
            movies: [{
                imdbID: '123',
                Title: 'test',
                Year: '1984'
            }],
            isPending: false,
            error: ''
        })
    })

    it('should handle REQUEST_MOVIES_FAILED action', () => {
        expect(reducers.requestMovies(initialStateMovies, {
            type: REQUEST_MOVIES_FAILED,
            payload: 'not a movie!'
        })).toEqual({
            movies: [],
            isPending: false,
            error: 'not a movie!'
        })
    })
})