module.exports = {
    host: '192.168.109.6',
    port: '8020',
    publicPath: '..',
    vendors: [
        'antd',
        'babel-polyfill',
        'echarts',
        'js-cookie',
        'prop-types',
        'react',
        'react-dom',
        'react-intl',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux',
        'redux-devtools-extension',
        'redux-thunk',
        'whatwg-fetch'
    ],
    html: {
        title: '火星财经24',
        keywords: '火星财经24',
        description: '火星财经24'
    },
    proxy: {
        context: ['/*'],
        target: 'http://wechatstore.linekong.com'
    },
    sftp: {
        port: '22',
        host: '172.16.8.220',
        username: 'lkuc',
        password: 'lkuc_dev',
        path: './dist/',
        remotePath: '/data/www/play.linekonguat.com/',
    }
}
