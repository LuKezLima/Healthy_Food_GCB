import React from "react";


export default (props) => {
    return (

        <div className="recipe">
                    <div className="img-recipe-container">
                        <img src={props.imageRecipe} alt="Foto de Comida" className="image-recipe"/>
                    </div>
                    <div className="info-recipe-group">
                        <div className="info-recipe">
                            <h2 className="name-recipe">{props.nameRecipe}</h2>
                            <button className="btn-recipe">See Recipe</button>
                        </div>
                    </div>
                </div>

    )
}