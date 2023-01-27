// 组件形式的写法
import About from "@/views/About";
import Home from "@/views/Home";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const baseRoute = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </BrowserRouter>
)

export default baseRoute;