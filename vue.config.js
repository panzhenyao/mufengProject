module.exports = {
    chainWebpack: config => {
        // 发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/mian-prod.js')
            //使用externals设置排除项
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                lodash: '_',
            })
            //使用插件
            config.plugin('html').tap(args => {
                //添加参数isProd
                args[0].isProd = false
                return args
            })
        })
        // 开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/mian-dev.js')

            //使用插件
            config.plugin('html').tap(args=>{
                //添加参数isProd
                args[0].isProd = true
                return args
            })
        })
    },
    devServer: {
        open: true, //自动打开浏览器
        port: 8878 //端口号
    }
}