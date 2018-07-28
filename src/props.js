import $ from 'jquery'
import Invoker from './REACT_CPT_GUOH/A_common/invoker.js'

let temp = {
    agreement: 'http',
    async: false,
}

let props = {
    collapsed: false,
    Login: {
        handleLogin: function(para) {
            this.setState({
                log: true
            })
        },
        logo:"../logo-small.png",
        title:"房地产经纪管理系统",
        phone:"400-007-5550",
        copyRight:"过户通版权所有 | 网络经营许可证 黔ICP备16007649号-1 | © Copyright©2016 guoh.me版权所有"
    },
    NavBar: {
        title: '房地产经纪管理系统',
        stitle: 'Agency Management Sys',
        Menu: {
            tab: '首页',
            MenuItem: [{
                icon: 'bf-shouye1',
                title: '首页'
            }, {
                icon: 'bf-shouye1',
                title: '门店管理'
            }, {
                icon: 'bf-shouye1',
                title: '订单管理'
            }, {
                icon: 'bf-shouye1',
                title: '日程管理'
            }]
        }
    },
    Content: {
        User: {
            handleLoad: function() {
                this.setState({
                    title: "gcc"
                })
            },
            handleUser: function() {
                console.log("this is handleLeave")
            },
            handleLeave: function() {

                sessionStorage.clear();
                window.location.href = '/index.html';

            },
            setting: [{
                icon: "bf-shezhi",
                handleClick: function() {
                    console.log("this is shezhi")
                }
            }, {
                icon: "bf-xinfengtianchong",
                handleClick: function() {
                    console.log("this is xinfeng")
                }
            }, {
                icon: "bf-noticefill",
                handleClick: function() {
                    console.log("this is notice")
                }
            }]
        },
        Pages: [{
            tab: "首页",
            Page: {
                Index: {
                    Crumbs: "首页",
                    Title: {
                        title: "数据报表"
                    },
                    SimpleBlock: {
                        BlockItem: [{
                            text: "门店数",
                            field: "StoreCount",
                            unit: "个"
                        }, {
                            text: "经纪人数",
                            field: "StaffCount",
                            unit: "人"
                        }, {
                            text: "订单数",
                            field: "OrderCount",
                            unit: "个"
                        }, {
                            text: "权证数",
                            field: "AgentCount",
                            unit: "人"
                        }],
                        handleLoad: function() {
                            this.setState({
                                StoreCount: 100,
                                StaffCount: 100,
                                OrderCount: 100,
                                AgentCount: 100
                            })
                        }
                    },
                    Chart: {
                        handleLoad: function(para, to) {
                            let option = {
                                title: {
                                    text: '各门店订单数据情况'
                                },
                                tooltip: {
                                    trigger: 'axis'
                                },
                                legend: {
                                    data: ['大坪一号', '大坪二号']
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                toolbox: {
                                    feature: {
                                        saveAsImage: {}
                                    }
                                },
                                xAxis: {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                                    axisLine: {
                                        lineStyle: {
                                            color: '#a5b8bf',
                                        }
                                    },
                                },
                                yAxis: {
                                    type: 'value',
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    // 控制网格线是否显示
                                    splitLine: {
                                        show: true,
                                        //  改变轴线颜色
                                        lineStyle: {
                                            // 使用深浅的间隔色
                                            color: ['#e9f1f3']
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: '#a5b8bf',
                                        }
                                    },
                                },
                                series: [{
                                    name: '大坪一号',
                                    type: 'line',
                                    //这句就是去掉点的
                                    smooth: true, //这句就是让曲线变平滑的
                                    stack: '大坪一号',
                                    symbol: 'circle', //图标形状
                                    symbolSize: 6, //图标尺寸
                                    itemStyle: {
                                        normal: {
                                            color: "#009EFB" //图标颜色
                                        }
                                    },
                                    lineStyle: {
                                        normal: {
                                            width: 2, //连线粗细
                                            color: "#009EFB" //连线颜色
                                        }
                                    },
                                    data: [10, 15, 18, 32, 45, 38, 28, 22, 22, 30, 35, 39, 40, 28, 26, 36, 37, 26, 23, 20, 28, 26, 32, 35, 39, 32, 30, 28, 32, 25, 38]
                                }, {
                                    name: '大坪二号',
                                    type: 'line',

                                    smooth: true,
                                    stack: '大坪二号',
                                    symbol: 'circle',
                                    symbolSize: 6,
                                    itemStyle: {
                                        normal: {
                                            color: "#55ce63 "
                                        }
                                    },
                                    lineStyle: {
                                        normal: {
                                            width: 2,
                                            color: "#55ce63 "
                                        }
                                    },
                                    data: [20, 35, 58, 32, 45, 12, 18, 12, 12, 10, 5, 9, 20, 18, 16, 16, 17, 16, 13, 10, 18, 16, 22, 15, 19, 22, 10, 18, 22, 15, 18]
                                }]
                            }
                            this.setState({
                                option: option
                            })
                        }
                    }
                }
            }
        }, {
            tab: "门店管理",
            Page: {
                Index: {
                    Crumbs: "首页/门店管理",
                    Title: {
                        title: "门店管理",
                        Search: {}
                    },
                    Block: {
                        BlockItem: [{
                            title: {
                                h1: {
                                    field: "no",
                                    title: "编号"
                                },
                                h2: {
                                    field: "order",
                                    title: "订单数"
                                },
                                h3: {
                                    field: "rank",
                                    title: "本月排名"
                                }
                            },
                            content: {
                                h1: {
                                    field: "name",
                                    title: "店名"
                                },
                                h2: {
                                    field: "leader",
                                    title: "店长"
                                },
                                h3: {
                                    field: "address",
                                    title: "地址"
                                },
                                img: ""
                            }
                        }, {
                            title: {
                                h1: {
                                    field: "no",
                                    title: "编号"
                                },
                                h2: {
                                    field: "order",
                                    title: "订单数"
                                },
                                h3: {
                                    field: "rank",
                                    title: "本月排名"
                                }
                            },
                            content: {
                                h1: {
                                    field: "name",
                                    title: "店名"
                                },
                                h2: {
                                    field: "leader",
                                    title: "店长"
                                },
                                h3: {
                                    field: "address",
                                    title: "地址"
                                },
                                img: ""
                            }
                        }, {
                            title: {
                                h1: {
                                    field: "no",
                                    title: "编号"
                                },
                                h2: {
                                    field: "order",
                                    title: "订单数"
                                },
                                h3: {
                                    field: "rank",
                                    title: "本月排名"
                                }
                            },
                            content: {
                                h1: {
                                    field: "name",
                                    title: "店名"
                                },
                                h2: {
                                    field: "leader",
                                    title: "店长"
                                },
                                h3: {
                                    field: "address",
                                    title: "地址"
                                },
                                img: ""
                            }
                        }, {
                            title: {
                                h1: {
                                    field: "no",
                                    title: "编号"
                                },
                                h2: {
                                    field: "order",
                                    title: "订单数"
                                },
                                h3: {
                                    field: "rank",
                                    title: "本月排名"
                                }
                            },
                            content: {
                                h1: {
                                    field: "name",
                                    title: "店名"
                                },
                                h2: {
                                    field: "leader",
                                    title: "店长"
                                },
                                h3: {
                                    field: "address",
                                    title: "地址"
                                },
                                img: ""
                            }
                        }],
                        handleLoad: function(para) {
                            this.setState({
                                data: [{
                                    title: {
                                        no: "002",
                                        order: 234,
                                        rank: 1
                                    },
                                    content: {
                                        name: "大坪二号分店1",
                                        leader: "左晓怡",
                                        address: "渝中区石油路万科锦城3-3号",
                                        img: "./project.png"
                                    }
                                }, {
                                    title: {
                                        no: "002",
                                        order: 234,
                                        rank: 1
                                    },
                                    content: {
                                        name: "大坪二号分店1",
                                        leader: "左晓怡",
                                        address: "渝中区石油路万科锦城3-3号",
                                        img: "./project.png"
                                    }
                                }, {
                                    title: {
                                        no: "002",
                                        order: 234,
                                        rank: 1
                                    },
                                    content: {
                                        name: "大坪二号分店1",
                                        leader: "左晓怡",
                                        address: "渝中区石油路万科锦城3-3号",
                                        img: "./project.png"
                                    }
                                }, {
                                    title: {
                                        no: "002",
                                        order: 234,
                                        rank: 1
                                    },
                                    content: {
                                        name: "大坪二号分店1",
                                        leader: "左晓怡",
                                        address: "渝中区石油路万科锦城3-3号",
                                        img: "./project.png"
                                    }
                                }]
                            })
                        }
                    },
                    Table: {
                        tab: [{
                            field: "all",
                            title: "全部"
                        }, {
                            field: "on",
                            title: "营业中"
                        }, {
                            field: "off",
                            title: "已关闭"
                        }],
                        head: [{
                            field: "No",
                            title: "序号"
                        }, {
                            field: "id",
                            title: "门店编号"
                        }, {
                            field: "Name",
                            title: "门店名称"
                        }, {
                            field: "Address",
                            title: "门店地址"
                        }, {
                            field: "order",
                            title: "门店店长"
                        }, {
                            field: "state",
                            title: "经纪人"
                        }, {
                            field: "createTime",
                            title: "营业状态"
                        }, {
                            field: "createTime",
                            title: "加入时间"
                        }, {
                            field: "operation",
                            title: "操作"
                        }],
                        operation: [{
                            todo: "停用",
                            fun: function(para) {
                                console.log(para)
                            }
                        }, {
                            todo: "编辑",
                            fun: function(para) {
                                console.log(para)
                            }
                        }, {
                            todo: "查看",
                            fun: function(para) {
                                console.log(para)
                            }
                        }],
                        handleLoad: function(page, tab, search) {
                            let pages = 5
                            let maxPage = [];
                            for(let i = 0; i < pages; i++) {
                                maxPage.push(i + 1)
                            }
                            this.page = maxPage;
                            this.setState({
                                tab: tab,
                                page: page,
                                pages: pages,
                                data: [{
                                    no: "001",
                                    id: "GHT001",
                                    head: "",
                                    name: "左小青",
                                    order: "8",
                                    state: "启动中",
                                    createTime: "2017-09-28",
                                    Id: "12"
                                }]
                            })
                        }
                    }
                },
                List: {
                    Crumbs: "首页/门店管理/门店列表",
                    Title: {
                        title: "门店列表",
                        BtnNew: "新建门店"
                    },
                    SimpleBlock: {
                        BlockItem: [{
                            text: "门店数",
                            field: "StoreCount",
                            unit: "个"
                        }, {
                            text: "经纪人数",
                            field: "StaffCount",
                            unit: "人"
                        }, {
                            text: "营业中",
                            field: "AgentCount",
                            unit: "人"
                        }, {
                            text: "停用中",
                            field: "OrderCount",
                            unit: "个"
                        }],
                        handleLoad: function() {
                            this.setState({
                                StoreCount: 100,
                                StaffCount: 100,
                                AgentCount: 100,
                                OrderCount: 100
                            })
                        }
                    },
                    Table: {
                        tab: [{
                            field: "all",
                            title: "全部"
                        }, {
                            field: "on",
                            title: "营业中"
                        }, {
                            field: "off",
                            title: "已关闭"
                        }],
                        head: [{
                            field: "No",
                            title: "序号"
                        }, {
                            field: "id",
                            title: "门店编号"
                        }, {
                            field: "Name",
                            title: "门店名称"
                        }, {
                            field: "Address",
                            title: "门店地址"
                        }, {
                            field: "order",
                            title: "门店店长"
                        }, {
                            field: "state",
                            title: "经纪人"
                        }, {
                            field: "createTime",
                            title: "营业状态"
                        }, {
                            field: "createTime",
                            title: "加入时间"
                        }, {
                            field: "operation",
                            title: "操作"
                        }],
                        operation: [{
                            todo: "停用",
                            fun: function(para) {
                                console.log(para)
                            }
                        }, {
                            todo: "编辑",
                            fun: function(para) {
                                console.log(para)
                            }
                        }, {
                            todo: "查看",
                            fun: function(para) {
                                console.log(para)
                            }
                        }],
                        handleLoad: function(page, tab, search) {
                            let pages = 5
                            let maxPage = [];
                            for(let i = 0; i < pages; i++) {
                                maxPage.push(i + 1)
                            }
                            this.page = maxPage;
                            this.setState({
                                tab: tab,
                                page: page,
                                pages: pages,
                                data: [{
                                    no: "001",
                                    id: "GHT001",
                                    head: "",
                                    name: "左小青",
                                    order: "8",
                                    state: "启动中",
                                    createTime: "2017-09-28",
                                    Id: "12"
                                }]
                            })
                        }
                    }
                },
                New: {
                    Crumbs: "首页/门店管理/新建门店",
                    Title: {
                        title: "新建门店"
                    },
                    Form: {
                        field: {
                            userhead: "",
                            storeName: "",
                            inUse: "on",
                            auther: [],
                            belong: "一号店",
                            ifLeader: ""
                        },
                        input: [{
                            type: "img",
                            label: "头像",
                            field: "userhead",
                            handleUpload: function(data) {

                            }
                        }, {
                            type: "text",
                            label: "门店名称",
                            field: "storeName"
                        }, {
                            type: "radio",
                            label: "是否启用",
                            field: "inUse",
                            value: ["启用", "不启用"]
                        }, {
                            type: "checks",
                            label: "负责权证",
                            field: "auther",
                            handleLoad: function() {
                                return ["左小青", "李小白", "和大户", "张晓峰"]
                            }
                        }, {
                            type: "select",
                            label: "所属门店",
                            field: "belong",
                            handleLoad: function() {
                                return ["一号店", "二号店", "三号店", "四号店"]
                            }
                        }, {
                            type: "check",
                            label: "店长身份",
                            field: "ifLeader",
                            value: "设置为店长"
                        }],
                        submit: "确认提交",
                        handleSubmit: function(input) {
                            console.log(input)
                        }
                    }
                },
                Detail: {
                    Crumbs: "首页/门店管理/门店详情",
                    Title: {
                        title: "门店详情"
                    },
                    Information: {
                        info: [{
                            field: "createTime",
                            title: "开通时间"
                        }, {
                            field: "belong",
                            title: "所属门店"
                        }, {
                            field: "order",
                            title: "订单总数"
                        }],
                        handleLoad() {
                            return {
                                name: "左小青",
                                createTime: "2017-09-09 11:00:00",
                                belong: "大坪二号店",
                                order: 23
                            }
                        },
                        handleEdit() {

                        }
                    }
                }
            }
        }, {
            tab: "订单管理",
            Page: {
                Index: {
                    Crumbs: "首页/订单管理",
                    Title: {
                        title: "订单管理"
                    },
                    Table: {
                        tab: [{
                            field: "all",
                            title: "全部"
                        }, {
                            field: "on",
                            title: "办理中"
                        }, {
                            field: "off",
                            title: "已完成"
                        }],
                        head: [{
                            field: "no",
                            title: "序号"
                        }, {
                            field: "id",
                            title: "订单编号"
                        }, {
                            field: "agent",
                            title: "所属经纪人"
                        }, {
                            field: "auther",
                            title: "负责权证"
                        }, {
                            field: "belong",
                            title: "所属门店"
                        }, {
                            field: "state",
                            title: "订单状态"
                        }, {
                            field: "createTime",
                            title: "创建时间"
                        }, {
                            field: "operation",
                            title: "操作"
                        }],
                        operation: [{
                            todo: "重新派单",
                            //@para [item,todo]
                            //item Object
                            //todo String
                            fun: function(para) {
                                console.log(para)
                            },
                            Madel: {
                                title: "分派订单",
                                Form: {
                                    field: {
                                        auther: ''
                                    },
                                    input: [{
                                        type: "select",
                                        label: "选择权证",
                                        field: "auther",
                                        handleLoad: function() {
                                            return ["左小青", "左小青2", "左小青3", "左小青4"]
                                        }
                                    }],
                                    submit: "确认提交",
                                    handleSubmit: function(input) {

                                    }
                                }
                            }
                        }, {
                            todo: "查看",
                            fun: function(para) {}
                        }],
                        handleLoad: function(page, tab, search) {
                            let pages = 5
                            let maxPage = [];
                            for(let i = 0; i < pages; i++) {
                                maxPage.push(i + 1)
                            }
                            this.page = maxPage
                            this.setState({
                                tab: tab,
                                page: page,
                                pages: pages,
                                data: [{
                                    no: "002",
                                    id: "201709261856005",
                                    agent: "左小青2",
                                    auther: "未分配",
                                    belong: "大坪2号分店",
                                    state: "待支付",
                                    createTime: "2017-09-28"
                                }]
                            })
                        }
                    }
                }
            }
        }, {
            tab: "日程管理",
            Page: {
                Index: {
                    Crumbs: "首页/日程管理",
                    Title: {
                        title: "日程管理",
                        Search: {}
                    },
                    Calendar: {
                        handleLoad: function(year, month, day) {
                            return [{
                                time: "09:00",
                                goal: "项目咨询",
                                user: "李俊峰"
                            }]
                        }
                    },
                }
            }
        }, {
            tab: "数据报表",
            Page: {
                Index: {
                    Crumbs: "首页/数据报表",
                    Title: {
                        title: "数据报表"
                    }
                }
            }
        }]
    },
    Foot: {
        copyRight: "过户通版权所有 | 网络经营许可证 黔ICP备16007649号-1 | © Copyright©2016 guoh.me版权所有"
    }
}

export default props;