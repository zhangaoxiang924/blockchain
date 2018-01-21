/**
 * Author：zhoushuanglong
 * Time：2018-01-20 21:34
 * Description：Header nav
 */

import React from 'react'
import {array} from 'prop-types'
import {injectIntl, FormattedMessage} from 'react-intl'

import './index.scss'

const HeaderRollMsg = (props) => {
    const {headerRollMsg} = props
    return <div>
        {headerRollMsg.map((d, i) => {
            return <div key={i}>
                <FormattedMessage id="nav.market"/>
                <span>{d.name}</span>
                <span>{d.price}</span>
                <span>{d.rate}</span>
            </div>
        })}
    </div>
}

HeaderRollMsg.defaultProps = {
    headerRollMsg: [
        {
            name: '名称',
            price: '价格',
            rate: '上升率'
        }
    ]
}

HeaderRollMsg.propTypes = {
    headerRollMsg: array.isRequired
}

export default injectIntl(HeaderRollMsg)
