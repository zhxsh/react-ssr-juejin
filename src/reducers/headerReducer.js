import * as types from '../actions/ActionTypes';

let initialState = {
    navs: [
        {
            id: 0,
            key: "timeline",
            value: '首页'
        },
        {
            id: 1,
            key: "activities",
            value: '动态'
        },
        {
            id: 2,
            key: "books",
            value: '小册'
        },
        {
            id: 3,
            key: "opensource",
            value: '开源库'
        },
        {
            id: 4,
            key: "events",
            value: '活动'
        },
    ],
    curNav: {
        id: 0,
        key: "timeline",
        value: '首页'
    },
    show: false
}

export default function HeaderReducer(state=initialState, action) {
    switch(action.type){
        case types.CHANGE_NAV:
            return {
                ...state,
                ...action.payload
            }
        case types.SHOW_MENU:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
