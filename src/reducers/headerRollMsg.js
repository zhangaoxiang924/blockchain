/**
 * Author：zhoushuanglong
 * Time：2017/7/31
 * Description：login info
 */

import {HEADERROLLMSG} from '../constants/index'

const initState = [
    {
        name: 'name',
        price: 'price',
        rate: 'rate'
    }
]

const headerRollMsg = (state = initState, action) => {
    switch (action.type) {
        case HEADERROLLMSG:
            return action.rollMsg
        default:
            return state
    }
}

export default headerRollMsg
