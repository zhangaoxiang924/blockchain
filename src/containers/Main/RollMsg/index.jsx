/**
 * Author：zhoushuanglong
 * Time：2018-01-20 21:34
 * Description：Header nav
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {
    getHeaderRollMsg
} from '../../../actions/index'
import './index.scss'

import HeaderRollMsg from '../../../components/main/HeaderRollMsg'

class RollMsg extends Component {
    state = {expanded: false}

    loopGetMsg = () => {
        const {getHeaderRollMsg} = this.props.actions
        setInterval(function () {
            getHeaderRollMsg()
        }, 3 * 1000)
    }

    componentDidMount() {
        const This = this
        setTimeout(function () {
            This.loopGetMsg()
        }, 2000)
    }

    render() {
        const {headerRollMsg} = this.props
        return <div>
            <HeaderRollMsg headerRollMsg={headerRollMsg}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        headerRollMsg: state.headerRollMsg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({getHeaderRollMsg}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RollMsg)
