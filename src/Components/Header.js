import React,{ useState } from "react";
import Logo from '../Images/logo.svg'
import { VscThreeBars,VscClose } from "react-icons/vsc";
import PopupmenuClick from "./Popupmenu.js";


function Header(){

    const [popupMenu, setPopupMenu] = useState(false);
    const [btnOpen,setBtnOpen] = useState(true);

    const clickMenu1 =()=>{
        setPopupMenu(false)
        setBtnOpen(true)
    }

    let buttonClose = null;
    if(popupMenu){
        buttonClose=(<VscClose onClick={clickMenu1} className="icon-menu1"
        style={{width:"2.5em",height:"2.5em",fill:"#242d52"}}/>
        );
    }

    const clickMenu =()=>{
        setPopupMenu(true)
        setBtnOpen(false)
    }

    let openPop = null;
    if(btnOpen){
        openPop=(<VscThreeBars className="icon-menu1"
        style={{width:"2.5em",height:"2.5em",fill:"#242d52"}}
        onClick={clickMenu}
        />
        );
    }
    
    let popupmenu = null;
    if(popupMenu){
        popupmenu=(
            <PopupmenuClick/>
        );
    }

    return(
        <section className="header">
            <div className="logo-page">
                <img className="logo" src={Logo}/>
            </div>
            <div className="burger-menu">
                
                <button className="btn-menu" >
                    {buttonClose}
                    {openPop}
                </button>
                {popupmenu}
            </div>
            <div className="menu-bar">
                <ul>
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="get-started">
                <button className="btn-getstart">Get Started</button>
            </div>
        </section>
    );
}

export default Header;