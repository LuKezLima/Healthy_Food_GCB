import React from "react";

import imgRecipe1 from 'C:/Users/lucas/OneDrive/Área de Trabalho/landingpage/src/assets/comida_1.svg'
import imgRecipe2 from 'C:/Users/lucas/OneDrive/Área de Trabalho/landingpage/src/assets/comida_2.svg'
import imgRecipe3 from 'C:/Users/lucas/OneDrive/Área de Trabalho/landingpage/src/assets/comida_3.svg'
import imgRecipe4 from 'C:/Users/lucas/OneDrive/Área de Trabalho/landingpage/src/assets/comida_4.svg'

import CardRecipe from './Card-recipe';

export default function Home (props) {
    return(
        <section className="section" id="recipes">
        <div id="recipes-container">
            <div id="recipes-text">
                <h2 id="text-best">Our Best Recipes</h2>
                <p className="paragraph">Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <div id="recipes-group">
                
            <CardRecipe nameRecipe="Broccoli Salad with Bacon" imageRecipe={imgRecipe1}/>
            <CardRecipe nameRecipe="Classic Beef Burgers" imageRecipe={imgRecipe2}/>
            <CardRecipe nameRecipe="Classic Potato Salad" imageRecipe={imgRecipe3}/>
            <CardRecipe nameRecipe="Cherry Cobbler on the Grill" imageRecipe={imgRecipe4}/>

            </div>

        </div>
    </section>
    )
}