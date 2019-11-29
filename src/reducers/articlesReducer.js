import * as types from '../actions/ActionTypes';

const initialState = {
    // name: 'ted',
    // age: '20',
    articleList: {
        total: 0,
        entrylist: []
    }
}

export default function acticlesReducers(state = initialState, action) {
    switch (action.type) {
        // case types.GET_ARTICLES:
        //     return {
        //         ...state,
        //         ...action.payload
        //     };
        case types.GET_COMMENTS:
        case types.GET_TIMELINE:
            return {
                ...state,
                ...action.payload
            };
            break;
        default:
            return state;
    }
}


