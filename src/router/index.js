//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About'
import Home from '../components/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'


//创建并暴露一个路由器
export default new VueRouter({
    //mode: 'hash', //路由模式hash，默认hash兼容性较好，/#/
    mode: 'history', //路由模式history，/
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detailMessage', //给路由命名
                            //path: 'detail/:id/:title',     props: true,        params传参
                            path: 'detail', //query传参
                            component: Detail,
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title }
                            }
                        }
                    ]
                },
                {
                    name: 'news',
                    path: 'news',
                    component: News
                }
            ]
        },
    ]
})

