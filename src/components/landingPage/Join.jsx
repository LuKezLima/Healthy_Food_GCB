import React from "react";
import finalImage from "../../assets/bloco_final_image.svg";
import finalImageMobile from "../../assets/undraw_business_deal_re_up4u.svg";

export default function Join(props) {
  return (
    <>

      <section className="section" id="join-sec">
        <div id="join">
            <div id="join-container">
                <div id="join-group">
                    <div id="text-join-group" >
                        <h2 id="text-join">Join our membership to get special offer</h2>
                    </div> 
                    <div id="join-group-input">
                        <input type="text" name="" placeholder="Enter your email address" id="input-membership"/>
                        <button className="btn-recipe">Join</button>
                    </div>
                </div>
            </div>
            <figure>
                <img src={finalImage} alt="ilustração" id="image-finalblock"/>
                <img src={finalImageMobile}alt="ilustração" className="image-mobile2"/>
            </figure>
        </div>
   </section>

    <footer id="footer">
        
        <div id="footer-bar">
            <h4>© Copyrights 2019 Stack. All Rights Reserved.</h4>
            <div id="footer-list">
                <a>Privacy Policy -</a>
                <a>Terms and Conditions</a>
            </div>
        </div>
    </footer>
    </>
  )
}
