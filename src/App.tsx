import { useState } from 'react'
// import { Button } from "antd"
// import { UpCircleOutlined } from "@ant-design/icons"
import { Suspense } from "react"
import { Outlet, Link, useRoutes } from "react-router-dom"
import Routes from './router'
function App() {
  const [count, setCount] = useState(0)
  const Outlet = useRoutes(Routes)
  return (
    <div className="App">
      {/* <Link to="/home">HOME</Link> | 
      <Link to="/about">ABOUT</Link> |
      <Link to="/user">USER</Link>  */}
      {/* Outlet 占位符组件，类似于窗口 用来展示组件， 有点像vue中的 router-view*/}
      {/* <Outlet /> */}
        {Outlet}
    </div>
  )
}

export default App
