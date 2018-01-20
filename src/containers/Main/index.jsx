/**
 * Author：zhoushuanglong
 * Time：2017/7/26
 * Description：main
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'
import {injectIntl, FormattedMessage} from 'react-intl'

import {breadcrumb, navigation} from '../../actions/index'
import './index.scss'
import menuData from '../../public/menuData'
import logo from '../../public/img/logo.svg'

class Main extends Component {
    componentWillMount() {
        this.checkLogin()
        this.props.actions.breadcrumb([menuData[0].text])
        this.props.actions.navigation(menuData[0].key)
    }

    componentWillUpdate() {
        this.checkLogin()
    }

    checkLogin = () => {
        hashHistory.push('/login')
    }

    render() {
        const props = this.props

        const {intl} = this.props
        let tmp = intl.formatMessage({id: 'intl.name'}, {name: 'joe'})

        return <div>
            {tmp}
            <FormattedMessage
                id="intl.hello"
                defaultMessage={'hello'}/>,
            <FormattedMessage
                id="intl.name"
                defaultMessage={`我是默认消息`}
                values={{name: <b>{name}{props}{logo}</b>}}/>
            <Link onClick={() => {
                hashHistory.push()
            }}/>
            {props.children}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        loginInfo: state.loginInfo,
        breadcrumbArr: state.breadcrumbArr,
        navigationArr: state.navigationArr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({breadcrumb, navigation}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Main))
