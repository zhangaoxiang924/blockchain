/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：index actions
 */

import {
    HEADERROLLMSG
} from '../constants/index'

export const getHeaderRollMsg = () => {
    return {
        type: HEADERROLLMSG,
        rollMsg: [
            {
                name: 'BTC-比特币',
                price: '￥82.00',
                rate: '80%'
            }, {
                name: 'BTC-比特币',
                price: '￥82.00',
                rate: '80%'
            }, {
                name: 'BTC-比特币',
                price: '￥82.00',
                rate: '80%'
            }, {
                name: 'BTC-比特币',
                price: '￥82.00',
                rate: '80%'
            }

        ]
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
