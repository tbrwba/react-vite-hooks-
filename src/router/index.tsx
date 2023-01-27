// 对象形式的写法

import { lazy, Suspense } from "react"
// import Page1 from "@/views/page1"
// import Page2 from "@/views/page2"
// import About from "@/views/About";
import Home from "@/views/Home";
// import User from "@/views/User";
const About = lazy(() => import("@/views/About"))
// const Home = lazy(() => import("@/views/Home"))
const User = lazy(() => import("@/views/User"))
const Page1 = lazy(() => import("@/views/page1"))
const Page2 = lazy(() => import("@/views/page2"))
// Navigate 重定向组件
import { Navigate } from "react-router-dom"
// 懒加载模式需要添加一个loading属性
const withLoadingComponent = (component:JSX.Element) => (
    <Suspense fallback={<div>Loading...</div>}>
        {component}
    </Suspense>
)
const routes = [

    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/page1',
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: '/page2',
                element: withLoadingComponent(<Page2 />)
            }
        ]
    },
    // {
    //     path: "/home",
    //     element: withLoadingComponent(<Home />)
    // },
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About />)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User />)
    // }
]

export default routes;