import React from "react";
import Hedaer from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Contact from "./components/contact/Contact";
import { About } from "./components/about/About";
import Home from "./components/home/Home";

function Layout() {
    return (
       <>
             <Hedaer />
             <Outlet />
             <Footer />
       </>
    )
}

export default Layout