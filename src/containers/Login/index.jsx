/**
 * Author：zhoushuanglong
 * Time：2017/7/31
 * Description：login
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import './index.scss'
import {login} from '../../actions/index'

class Login extends Component {
    handleSubmit = (e) => {
        const This = this
        e.preventDefault()
        This.props.actions.login(This.username, This.password)
    }

    render() {
        return <div className="login-wrap">
            <input type="text" ref={(text) => {
                this.username = text
            }} placeholder="请输入账号"/>
            <input type="password" ref={(pas) => {
                this.password = pas
            }} placeholder="请输入密码"/>
            <button onClick={this.handleSubmit}>登录</button>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        loginInfo: state.loginInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({login}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
