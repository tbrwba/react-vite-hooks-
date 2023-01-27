import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化一般放在最上面
import "reset-css"
// import 'antd/dist/antd.css'  // 全局，全部组件的样式都引入了
// ui框架的样式
import "@/assets/styles/global.scss"
// 组件的样式

import App from './App'
import { BrowserRouter } from "react-router-dom"
// import BaseRoute from './router'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 使用了懒加载的组件需要再最外层添加一个Loading提示加载组件 */}
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
