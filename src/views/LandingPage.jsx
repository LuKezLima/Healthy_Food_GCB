import React from "react";

import Home from '../components/landingPage/Home'
import Join from '../components/landingPage/Join'
import Services from '../components/landingPage/Services'
import Recipes from '../components/landingPage/recipes/Recipes'
import Blog from '../components/landingPage/blog/Blog'

import './style.css'

export default () => {
    return(
        <>
        <Home/>
        <Recipes/>
        <Services/>
        <Blog/>
        <Join/>
        </>
    )
}