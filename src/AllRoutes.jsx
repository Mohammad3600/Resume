import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Resume from './components/Resume'
import { routers } from './routes-config'

function AllRoutes() {
    return (
    //   <BrowserRouter>

    //     <Routes>
    //         {/* {routers.map((route => (
    //             <Route  path={route.path} element={<route.component />} />
    //         )))} */}
    //         <Route  path="/resume" element={<Resume />} />
    //     </Routes>
    //     </BrowserRouter>
        <Routes>  
             <Route  path="/" element={<Resume />} />

        </Routes> 
        
    )
}

export default AllRoutes
