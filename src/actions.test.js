import * as actions from './actions';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED 
} from './constants.js';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

const nock = require('nock')

it('should create an action to search robots', () => {
    const text = 'of the Jedi';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})


it('handles requesting movies API', () => {
    const store = mockStore();
    store.dispatch(actions.requestMovies())
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_MOVIES_PENDING
    }

    // setting up mock fetch
    const scope = nock('https://www.omdbapi.com').get('/?s=star+wars&apikey=469942e0').reply(200, {
        Search: [{
            Title: "Star Wars: Episode IV - A New Hope",
            Year: "1977",
            imdbID: "tt0076759",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        }]
    })    

    expect(action[0]).toEqual(expectedAction)
    // expect(scope()).toEqual({        
    //     Title: "Star Wars: Episode IV - A New Hope",
    //     Year: "1977",
    //     imdbID: "tt0076759",
    //     Type: "movie",
    //     Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"        
    // })
})