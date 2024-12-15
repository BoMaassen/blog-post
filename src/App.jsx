import './App.css'
import logo from './assets/logo-white.png'
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/new-post" element={<NewPost />}/>
                <Route path="/overview" element={<Overview />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>


    )
}

export default App
