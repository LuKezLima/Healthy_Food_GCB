import React from "react";

export default (props) => {
    return (
        <div className="blog-card">

                <div className="image-blog-group">
                    <img src={props.articleImg} alt="imagem do artigo" className="image-blog"/>

                </div>
                <div className="info-blog-card">
                    <h2 className="title-blog">{props.articleTitle}</h2>
                    <div id="info-author-group">
                        <img src={props.authorImg} alt="" className="photo-author"/>
                        <p className="paragraph">Mike Jackson</p>
                    </div>
                </div>

            </div>
    )
}