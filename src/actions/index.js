/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：index actions
 */

import {
    NEWSLIST
} from '../constants/index'

export const getNewsList = (ListArr) => {
    return {
        type: NEWSLIST,
        ListArr
    }
    /* return (dispatch) => {
        axiosAjax('GET', '/api_login', {
            email: email,
            password: password
        }, function (data) {
            Cookies.get('email', data.data.email)
            Cookies.get('password', data.data.password)
            const actionData = data.data
            dispatch({
                type: LOGIN,
                actionData
            })
            hashHistory.push('/')
        })
    } */
}
