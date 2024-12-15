import './App.css'
import logo from './assets/logo-white.png'
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";

function App() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/new-post" element={<NewPost />}/>
                <Route path="/overview" element={<Overview />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </div>


    )
}

export default App
