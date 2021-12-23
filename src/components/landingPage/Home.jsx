import React from "react";
import {Link} from 'react-router-dom'
import imgHome from "../../assets/Illustration.svg";

import imgHomeMobile from "../../assets/undraw_cooking_lyxy.svg";



export default function Home(props) {


  return (
    <>

      <header id="header" >
        <nav id="nav">
     
            <input type="checkbox" id="check"/>
            <label htmlFor="check" id="checkbtn">
                <i className="fas fa-bars"></i>
            </label>

            <h1>Healthy Food</h1>
            <ul>
                <li> <a href="#recipes">Helthy recipes</a> 
                </li>
                <li> <a href="#blogs">Blog</a></li>
                <li> <a href="#join-sec">Join</a> </li>
                <li> <Link id="btn-register" to="/register">Register</Link> </li>
            </ul>

     
             
           
            
        </nav>
    </header>
        
    <section className="section" id="home">

            <div id="background">
                <img src={imgHomeMobile} alt="IlustraçãoMobile" className="image-mobile"/>
                <img src={imgHome} id="background-img" alt="Ilustração"/>
            </div>
            
            <div id="container-search">
                <h2>Ready for Trying a new recipe?</h2>
                <div id="search-box">
                    <input type="text" name="input-search" id="input-search" placeholder="Search healthy recipes"/>
                    <button id="btn-search-recipe"></button>
                </div>
            </div>

       
  
    </section>

    </>
  );
}
