/**
 * Author：zhoushuanglong
 * Time：2017/7/31
 * Description：login info
 */

import {NEWSLIST} from '../constants/index'

const initState = [
    {
        title: '标题',
        time: '2012-10-12'
    }
]

const newsList = (state = initState, action) => {
    switch (action.type) {
        case NEWSLIST:
            return action.ListArr
        default:
            return state
    }
}

export default newsList
