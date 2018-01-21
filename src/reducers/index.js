/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root reducer
 */

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import headerRollMsg from './headerRollMsg'

const reducers = Object.assign({
    headerRollMsg,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer
