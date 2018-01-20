/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：outer jsx
 */

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import zhCN from './locale/zh'
// import enUS from './locale/en'

import 'babel-polyfill'
import rootRoutes from './routes'
import store from './store/index'
import './public/index.scss'

addLocaleData([...en, ...zh])
const history = syncHistoryWithStore(hashHistory, store)

window.onload = () => {
    const pageLoadingEle = document.getElementById('pageLoading')
    pageLoadingEle.className = 'lk-loading'
    setTimeout(function () {
        pageLoadingEle.parentNode.removeChild(pageLoadingEle)
    })

    render(
        <IntlProvider locale='zh' messages={zhCN}>
            <Provider store={store}>
                <Router history={history}>
                    {rootRoutes}
                </Router>
            </Provider>
        </IntlProvider>,
        document.getElementById('root')
    )
}
