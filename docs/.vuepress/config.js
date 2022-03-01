module.exports = {
    title: 'TypeScript-axios',
    description: 'TypeScript-axios',
    base: '/TypeScript-axios/',
    theme: 'reco',
    head: [
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],
    plugins: [
        '@vuepress/medium-zoom',
        '@vuepress-reco/vuepress-plugin-loading-page', [
            'dynamic-title',
            {
                showIcon: '/favicon.ico',
                showText: '(/≧▽≦/)咦！又好了！',
                hideIcon: '/failure.ico',
                hideText: '(●—●)喔哟，崩溃啦！',
                recoverTime: 2000,
            },
        ],
        // 看板娘
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["blackCat"],
                clean: true,
                height: 260,
                modelStyle: {
                    width: '100px',
                    position: "fixed",
                    right: "0px",
                    bottom: "0px",
                    opacity: "0.9",
                    zIndex: 99999,
                    objectFit: 'cover',
                }
            }
        ],
        ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
            width: '300px', // 默认 260px
            title: '公告',
            body: [{
                    type: 'title',
                    content: '欢迎私聊vx:xiaoda0423 🎉🎉🎉',
                    style: 'text-aligin: center;'
                },
                {
                    text: 'text',
                    content: '开始时的兴趣和后来的责任是我不断更新动力。得到很多网友的称赞、祝福和贡献，真的非常开心(^▽^)。如果你觉得还不错，可以为本人贡献一杯奶茶。'
                }
                // {
                // 	type: 'image',
                // 	src: '../assets/20220112100413.jpg'
                // }
            ],
            footer: [{
                type: 'button',
                text: '打赏',
                link: '/donate'
            }]
        }],
        ['vuepress-plugin-code-copy', true]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        // 其它配置
        repo: 'https://github.com/webVueBlog/TypeScript-axios',
        repoLabel: 'Github',
        editLinks: true,
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        subSidebar: 'auto',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '星星♥',
                link: 'https://github.com/webVueBlog/TypeScript-axios'
            },
            {
                text: '哪吒的博客',
                items: [{
                    text: '博客',
                    items: [{
                            text: 'Github',
                            link: 'https://github.com/webVueBlog'
                        },
                        {
                            text: '博客',
                            link: 'https://1024bibi.com'
                        },
                    ]
                }, ],
            }
        ],
        sidebar: [{
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [{
                    title: "学前必读",
                    path: "/"
                }]
            },
            {
                title: "TypeScript常用语法",
                path: '/handbook/base',
                collapsable: false, // 不折叠
                children: [{
                    title: "基础类型",
                    path: "/handbook/base"
                }, {
                    title: "变量声明",
                    path: "/handbook/base1"
                }, {
                    title: "接口",
                    path: "/handbook/base2"
                }, {
                    title: "类",
                    path: "/handbook/base3"
                }, {
                    title: "函数",
                    path: "/handbook/base4"
                }, {
                    title: "泛型",
                    path: "/handbook/base5"
                }, {
                    title: "类型推断",
                    path: "/handbook/base6"
                }, {
                    title: "高级类型",
                    path: "/handbook/base7"
                }],
            },
            {
                title: "项目初始化",
                path: '/item/create',
                collapsable: false, // 不折叠
                children: [{
                    title: "需求分析",
                    path: "/item/create"
                }, {
                    title: "项目初始化",
                    path: "/item/create1"
                }, {
                    title: "demo编写",
                    path: "/item/create2"
                }],
            },
            {
                title: "基础功能实现",
                path: '/feat/add',
                collapsable: false, // 不折叠
                children: [{
                    title: "处理请求url参数",
                    path: "/feat/add"
                }, {
                    title: "处理请求body数据",
                    path: "/feat/add1"
                }, {
                    title: "处理请求header",
                    path: "/feat/add2"
                }, {
                    title: "获取响应数据",
                    path: "/feat/add3"
                }, {
                    title: "处理响应header",
                    path: "/feat/add4"
                }, {
                    title: "处理响应data",
                    path: "/feat/add5"
                }],
            },
            {
                title: "异常情况处理",
                path: '/catch/error',
                collapsable: false, // 不折叠
                children: [{
                    title: "错误处理",
                    path: "/catch/error"
                }, {
                    title: "错误信息增强",
                    path: "/catch/error1"
                }],
            },
            {
                title: "接口扩展",
                path: '/interface/more',
                collapsable: false, // 不折叠
                children: [{
                    title: "接口扩展",
                    path: "/interface/more"
                }, {
                    title: "axios函数重载",
                    path: "/interface/more1"
                }, {
                    title: "响应数据支持泛型",
                    path: "/interface/more2"
                }],
            },
            {
                title: "拦截器实现",
                path: '/interceptors/more',
                collapsable: false, // 不折叠
                children: [{
                    title: "拦截器设计与实现",
                    path: "/interceptors/more"
                }],
            },
            {
                title: "配置化实现",
                path: '/config/add',
                collapsable: false, // 不折叠
                children: [{
                    title: "合并配置的设计与实现",
                    path: "/config/add"
                }, {
                    title: "请求和响应配置化",
                    path: "/config/add1"
                }, {
                    title: "扩展 axios.create 静态接口",
                    path: "/config/add2"
                }],
            },
            {
                title: "取消功能实现",
                path: '/cancel/more',
                collapsable: false, // 不折叠
                children: [{
                    title: "取消功能的设计与实现",
                    path: "/cancel/more"
                }],
            },
            {
                title: "更多功能实现",
                path: '/more/more',
                collapsable: false, // 不折叠
                children: [{
                    title: "demo",
                    path: "/more/more"
                }, {
                    title: "XSRF 防御",
                    path: "/more/more1"
                }, {
                    title: "上传和下载的进度监控",
                    path: "/more/more2"
                }, {
                    title: "HTTP 授权",
                    path: "/more/more3"
                }, {
                    title: "自定义合法状态码",
                    path: "/more/more4"
                }, {
                    title: "自定义参数序列化",
                    path: "/more/more5"
                }, {
                    title: "baseURL",
                    path: "/more/more6"
                }, {
                    title: "demo 编写",
                    path: "/more/more7"
                }],
            },
            {
                title: "单元测试",
                path: '/text/more',
                collapsable: false, // 不折叠
                children: [{
                    title: "前言",
                    path: "/text/more"
                }, {
                    title: "Jest 安装和配置",
                    path: "/text/more1"
                }, {
                    title: "辅助模块单元测试",
                    path: "/text/more2"
                }, {
                    title: "请求模块单元测试",
                    path: "/text/more3"
                }, {
                    title: "headers 模块单元测试",
                    path: "/text/more4"
                }, {
                    title: "Axios 实例模块单元测试",
                    path: "/text/more5"
                }, {
                    title: "拦截器模块单元测试",
                    path: "/text/more6"
                }, {
                    title: "mergeConfig 模块单元测试",
                    path: "/text/more7"
                }, {
                    title: "请求取消模块单元测试",
                    path: "/text/more8"
                }, {
                    title: "剩余模块单元测试",
                    path: "/text/more9"
                }],
            },
        ]
    }
}