/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root reducer
 */

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import newsList from './newsList'

const reducers = Object.assign({
    newsList,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer
