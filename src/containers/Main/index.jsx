/**
 * Author：zhoushuanglong
 * Time：2017/7/26
 * Description：main
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {string, object} from 'prop-types'
import {injectIntl, FormattedMessage} from 'react-intl'

import {
    getNewsList
} from '../../actions/index'
import './index.scss'

class Main extends Component {
    state = {expanded: false}

    static propTypes = {
        model: object.isRequired,
        title: string
    }

    static defaultProps = {
        model: {
            id: 0
        },
        title: 'Your Name'
    }

    handleClick = () => {
        this.props.actions.getNewsList([
            {
                title: this.title.value,
                time: this.time.value
            }
        ])
    }

    render() {
        const {intl} = this.props
        let tmp = intl.formatMessage({id: 'attrTwo'}, {name: '重新命名的属性名称'})
        return <div>
            <FormattedMessage
                id="attrOne"
                defaultMessage={'第一个默认信息'}
            />,
            <FormattedMessage
                id="attrTwo"
                defaultMessage={'第二个默认信息'}
                values={{name: <b>{'123'}</b>}}
            />

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {tmp}

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={this.handleClick}>新闻列表</button>
            <input type="text" ref={(ref) => {
                this.title = ref
            }}/>
            <input type="text" ref={(ref) => {
                this.time = ref
            }}/>
            {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Main))
