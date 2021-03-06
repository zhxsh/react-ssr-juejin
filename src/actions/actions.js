import * as types from './ActionTypes';
import axios from 'axios';
// import jsonp from 'jsonp'

import api from '../Api/api'


axios.defaults.baseURL = 'http://localhost:9500';

export const getTimeline = () => {
    return dispatch => {
        axios.get(api.timeline)
            .then(function (res) {
                console.log('timelinezxs', res.data.m);
                // return {
                //     type: types.GET_TIMELINE,
                //     payload: {
                //         articleList: res.data.d
                //     }
                // };
                dispatch({
                    type: types.GET_TIMELINE,
                    payload: {
                        articleList: res.data.d
                    }
                });
            })

        // jsonp(api.timeline, null, (err, data) => {
        //     console.log(err, data)
        // })
    }

}




// export const changeNav = curNav => {
//     return {
//         type: types.CHANGE_NAV,
//         payload: {
//             curNav
//         }
//     }
// }

// export const showMenu = show => {
//     return {
//         type: types.SHOW_MENU,
//         payload: {
//             show: !show
//         }
//     }
// }