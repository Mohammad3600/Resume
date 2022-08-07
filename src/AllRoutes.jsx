import React from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Resume from './components/Resume'
import Basiri from "./data/basiri"
import Mohammad from "./data"
import Fayaz from "./data/fayaz"

// import { routers } from './routes-config'
// import basiri from './data/basiri'

const Links = ()=>{
    const styles = {
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: "100vh"
    }
    return <div style={styles}>
        <Link to={`/${Mohammad.path}`}>{Mohammad.name}</Link>
        <Link to={`/${Basiri.path}`}>{Basiri.name}</Link>
        <Link to={`/${Fayaz.path}`}>{Fayaz.name}</Link>
    </div>
}

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
             {/* <Route path="/" element={<Links />} /> */}
             <Route  path={`/`} element={<Resume {...Mohammad} />} />
             <Route  path={`/${Mohammad.path}`} element={<Resume {...Mohammad} />} />
             <Route  path={`/${Basiri.path}`} element={<Resume {...Basiri} />} />
             <Route  path={`/${Fayaz.path}`} element={<Resume {...Fayaz} />} />

        </Routes> 
        
    )
}

export default AllRoutes
