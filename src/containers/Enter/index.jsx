/**
 * Author：zhoushuanglong
 * Time：2017/7/26
 * Description：enter
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import './index.scss'
import {getNewsList} from '../../actions/index'

class Enter extends Component {
    render() {
        return <div>
            {this.props.newsList.map(function (d, i) {
                return <a key={i}>
                    <span>{d.title}</span>
                    <time>{d.time}</time>
                </a>
            })}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Enter)
