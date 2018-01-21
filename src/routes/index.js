/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root route
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'

const rootRoutes = <div>
    <Route path="/" getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Main').default)
        }, 'Main')
    }}>
        <IndexRoute getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Index').default)
            }, 'Index')
        }}/>
        <Route path='/index' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Index').default)
            }, 'Index')
        }}/>
        <Route path='/personal' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Personal').default)
            }, 'Personal')
        }}/>
        <Route path='/market' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Market').default)
            }, 'Market')
        }}/>
    </Route>
</div>

export default rootRoutes
