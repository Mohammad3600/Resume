import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Resume from './components/Resume'
import Basiri from "./data/basiri"
import Mohammad from "./data"
import Fayaz from "./data/fayaz"

import { routers } from './routes-config'
import basiri from './data/basiri'

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
             <Route  path="/" element={<Resume {...Mohammad} />} />
             <Route  path={`/${Basiri.path}`} element={<Resume {...Basiri} />} />
             <Route  path={`/${Fayaz.path}`} element={<Resume {...Fayaz} />} />

        </Routes> 
        
    )
}

export default AllRoutes
