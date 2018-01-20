/**
 * Author：zhoushuanglong
 * Time：2017/7/31
 * Description：login
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'

import './index.scss'
import {getNewsList} from '../../actions/index'

class Login extends Component {
    handleLink = () => {
        hashHistory.push('/')
    }

    render() {
        return <div className="login-wrap"><Link onClick={this.handleLink}>连接到首页</Link></div>
    }
}

const mapStateToProps = (state) => {
    return {
        newsList: state.newsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({getNewsList}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
