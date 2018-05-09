# bookhouse

> bookhouse-pc

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at dist/
gulp
```

## 项目结构

    |-- index.html 根挂载
    |
    |-- static 静态文件
    |
    |-- src 项目文件
        |
        |-- data 模拟数据（自己写死的）
        |
        |-- mock 模拟数据（使用mockjs配合axios-mock-adapter拦截请求并根据请求返回指定数据）
            |
            |-- data mock模版
            |
            |-- mock.js 拦截请求按需返回数据
        |
        |-- assets 项目静态资源
        |
        |-- components 自定义组件
        |
        |-- router 路由配置
        |
        |-- App.vue 项目入口
        |
        |-- main.js
    |
    |-- node_modules 依赖
    |
    |-- build webpack配置
    |
    |-- config 环境配置
    |
    |-- package.json 依赖目录
    |
    |-- readme.md 项目说明
    |
    |-- .babelrc babel配置
    |
    |-- .gitignore git忽略提交
