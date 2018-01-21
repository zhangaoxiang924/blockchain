/**
 * Author：zhoushuanglong
 * Time：2017/7/26
 * Description：main
 */

import React from 'react'
import './index.scss'

import HeaderRollMsg from './RollMsg'
import HeaderNav from './HeaderNav'

const Main = (props) => {
    return [
        <HeaderRollMsg key="headerRollMsg"/>,
        <HeaderNav key="headerNav"/>,
        <div key="mainWrap" className="main-wrap">{props.children}</div>
    ]
}

export default Main
