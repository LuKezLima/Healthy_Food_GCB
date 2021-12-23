import React from "react";

import ArticleCard from "./ArticleCard";

import photo1 from '../../../assets/Photo.png'
import photo2 from "../../../assets/Photo2.png";
import photo3 from "../../../assets/photo3.png";
import photo4 from "../../../assets/Photo4.png";

import articleImg1 from "../../../assets/blog_image_1.svg";
import articleImg2 from "../../../assets/bloco_image_2.svg";
import articleImg3 from "../../../assets/bloco_image_3.svg";
import articleImg4 from "../../../assets/bloco_image_4.svg";

import arrow from "C:/Users/lucas/OneDrive/Área de Trabalho/landingpage/src/assets/Arrow.png";


export default function Blog(props) {
  return (
     <section className="section" id="blogs">

<div id="text-blog">
    <h2 id="text-best">Read Our Blog</h2>
    <p className="paragraph">Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
</div>

<div id="blog-group">

        <ArticleCard
            authorName="Kevin Ibrahim"
            authorImg={photo1}
            articleTitle="Quick-start guide to nuts and seeds"
            articleImg={articleImg1}
          />
          <ArticleCard
            authorName="Mike Jackson"
            authorImg={photo2}
            articleTitle="Nutrition: Tips for Improving Your Health"
            articleImg={articleImg2}
          />
          <ArticleCard
            authorName="Bryan McGregor"
            authorImg={photo3}
            articleTitle="The top 10 benefits of eating healthy"
            articleImg={articleImg3}
          />
          <ArticleCard
            authorName="Joshua"
            authorImg={photo4}
            articleTitle="What Makes a Healthy Diet?"
            articleImg={articleImg4}
          />

    </div>


<button id="btn-slider-next">
    <img src={arrow} alt="" id="image-arrow"/>
</button>

</section>
      
  )
}