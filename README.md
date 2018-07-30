# react-mis

通过src下的props.js文件编辑生成整个管理系统前端

大致结构如下

let props = {
    collapsed: false,
    Login: {},
    NavBar: {},
    Content: {
        User: {},
        Pages: [
        {
            tab: "首页",
            Page: {
                Index: {
                    Crumbs: "首页",
                    Title: {},
                    SimpleBlock: {},
                    Chart: {}
                },
                List: {
                    Crumbs: "列表",
                    Table: {},
                },
            }
        },
          tab: "客户管理",
            Page: {
                Index: {
                    Crumbs: "首页",
                    Title: {},
                    SimpleBlock: {},
                    Chart: {}
                },
                List: {
                    Crumbs: "列表",
                    Table: {},
                },
            }
        }]
    },
    copyRight:""
}
      
