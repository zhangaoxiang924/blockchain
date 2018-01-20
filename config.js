module.exports = {
    host: '192.168.84.43',
    port: '8020',
    publicPath: '..',
    vendors: [
        'antd',
        'axios',
        'babel-polyfill',
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux',
        'redux-devtools-extension',
        'redux-thunk'
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
