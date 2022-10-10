import React from "react";
import logoFooter from '../Images/logo-white.svg';
import iconFace from '../Images/icon-facebook.svg'
import iconYoutube from '../Images/icon-youtube.svg'
import iconTwitter from '../Images/icon-twitter.svg'
import iconPin from '../Images/icon-pinterest.svg'
import iconIg from '../Images/icon-instagram.svg'

import backGround from '../Images/bg-tablet-pattern.svg';

function Footer(){
    return(
        <section className="footer">
            <div className="red-footer" >
                <img className="bg-red-footer" src={backGround}/>
                <img className="bg-red-footer2" src={backGround}/>
                <div className="red-footer2" >
                    <h2 className="h2-footer">
                    Simplify how your team<br/>
                    works today.
                    </h2>
                    <button className="btn-getstart btn-footer">Get Started</button>
                </div>
                
            </div>

            <div className="black-footer">
                <div className="black-footer1">
                <div className="black-footer2">
                    <div className="logo-footer">
                        <img className="logo-footer-size" src={logoFooter}/>
                            <div className="social">
                            <img src={iconFace}/>
                            <img src={iconYoutube}/>
                            <img src={iconTwitter}/>
                            <img src={iconPin}/>
                            <img src={iconIg}/>
                        </div>
                    </div>
                </div>

                <div className="menu-footer">
                <div className="black-footer2">
                        <ul className="ul-footer">
                            <li>Home</li>
                            <li>Pricing</li>
                            <li>Products</li>
                            <li>About us</li>
                        </ul>
                </div>

                <div className="black-footer2">
                        <ul className="ul-footer">
                            <li>Careers</li>
                            <li>Community</li>
                            <li>Privacy </li>
                        </ul>
                </div>
                </div>

                <div className="inbox">
                    <form className="form-inbox">
                        <input type="text" name="email" placeholder="Update in your inbox..."/>
                        <input type="submit" value="Go"/>
                    </form>
                    <p className="copyright">Copyright 2020. All Rights Reserved</p>
                </div>

                </div>
                <p className="copyright2">Copyright 2020. All Rights Reserved</p>
            </div>
        </section>
    );
}

export default Footer;