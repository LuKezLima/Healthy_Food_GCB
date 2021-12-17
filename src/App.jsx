import React from "react";

import Home from './components/Home'
import Join from './components/Join'
import Services from './components/Services'
import Recipes from './components/recipes/Recipes'
import Blog from './components/blog/Blog'

import './style.css'


export default (props) => {
    return (
        <>

        <Home></Home>
        <Recipes></Recipes>
        <Services></Services>
        <Blog></Blog>
        <Join></Join>

        </>
    )

}