import React from "react";

import imgServiceBg from '../../assets/bloco_services.svg'
import imgServiceBgMobile from "../../assets/undraw_special_event_-4-aj8.svg"


export default function Service(props) {
  return (

    <section className="section" id="services">

    <div className="image-container" >
        <img src={imgServiceBg} alt="ilustração" className="image-back"  />
        <img src={imgServiceBgMobile} alt="ilustração" className="image-mobile2"  />
    </div>

    <div className="info">
        <h2 id="service-subtitle">The best services ready
            To serve you</h2>
            <div id="group-paragraphs">
                <p className="paragraph">Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <br/>
                <p className="paragraph">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <br/>
                <p className="paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <button id="btn-service">
                Know More
            </button>
       
    </div>
    
</section>

  );
}
