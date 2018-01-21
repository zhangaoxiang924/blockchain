/**
 * Author：zhoushuanglong
 * Time：2018-01-20 21:34
 * Description：Header nav
 */

import React from 'react'
import {Link} from 'react-router'
import {injectIntl} from 'react-intl'

import './index.scss'

const HeaderNav = (props) => {
    const {intl} = props
    const index = intl.formatMessage({id: 'nav.index'})
    const market = intl.formatMessage({id: 'nav.market'})
    const personal = intl.formatMessage({id: 'nav.personal'})
    return <div className="header-nav">
        <ul>
            <li><Link to="/index">{index}</Link></li>
            <li><Link to="/market">{market}</Link></li>
            <li><Link to="/personal">{personal}</Link></li>
        </ul>
    </div>
}

export default injectIntl(HeaderNav)
