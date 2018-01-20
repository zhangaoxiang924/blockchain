/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：index actions
 */

import { hashHistory } from 'react-router'
import { axiosAjax } from '../public/index'

import {
    LOGIN,
    GAMELIST,
    BREADCRUMB,
    NAVIGATION
} from '../constants/index'

export const login = (email, password) => {
    return (dispatch) => {
        hashHistory.push('/')
        axiosAjax('GET', '/api_login', {
            email: email,
            password: password
        }, function (data) {
            // $.cookie('email', data.data.email)
            // $.cookie('password', data.data.password)
            const actionData = data.data
            dispatch({
                type: LOGIN,
                actionData
            })
            hashHistory.push('/')
        })
    }
}

export const gameList = () => {
    return (dispatch) => {
        axiosAjax('GET', '/api_game_list', {}, function (data) {
            const actionData = data.data
            dispatch({
                type: GAMELIST,
                actionData
            })
        })
    }
}

export const breadcrumb = (arr) => {
    return {
        type: BREADCRUMB,
        arr
    }
}

export const navigation = (selectkey, openkey) => {
    return {
        type: NAVIGATION,
        selectkey,
        openkey
    }
}
