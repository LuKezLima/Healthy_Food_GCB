import React from "react";

import imgHome from '../assets/Illustration.svg'

import imgHomeMobile from '../assets/undraw_cooking_lyxy.svg'


export default function Home (props) {
    return(
       <>
            <header id="header" >
            <nav id="nav">
     
            <input type="checkbox" id="check"/>
            <label htmlFor="check" id="checkbtn">
                <i className="fas fa-bars" ></i>
            </label>

            <h1 id="title">Healthy Food</h1>
            <ul>
                <li> <a href="#recipes">Helthy recipes</a> 
                </li>
                <li> <a href="#blogs">Blog</a></li>
                <li> <a href="#join-sec">Join</a> </li>
                <li id="btn-register"> <a id="btn-register" href="#">Register</a> </li>
            </ul>

     
             
           
            
        </nav>
    </header>

    <section className="section" id="home">

<div id="background" >   
     <img src={imgHome} id="background-img" alt="ilustração de fundo"/>
     <img src={imgHomeMobile} className="image-mobile" alt="ilustração de fundo"/>
</div>

<div id="container-search">
    <h2 id="call-text">Ready for Trying a new recipe?</h2>
    <div id="search-box">
        <input type="text" name="input-search" id="input-search" placeholder="Search healthy recipes" />
        <button id="btn-search-recipe"></button>
    </div>
</div>


</section>
        
</>
    )
}