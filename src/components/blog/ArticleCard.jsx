import React from "react";

export default (props) => {
    return (
        <article className="blog-card">

        <div className="image-blog-group">
            <img src={props.articleImg} alt="Foto do artigo" className="image-blog"/>

        </div>
        <div className="info-blog-card">
            <h2 className="title-blog">{props.articleTitle}</h2>
            <div id="info-author-group">
                <img src={props.authorImg} alt="foto do autor" id="image-blog" className="photo-author"/>
                <p>{props.authorName}</p>
            </div>
        </div>

    </article>
    )
}