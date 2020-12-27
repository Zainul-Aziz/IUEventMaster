import React from 'react';
import logo from '../src/images/logo.png';
import desc from '../src/images/IU_InspiringExcellence.png';
import './index.css';
const Footer = () =>
{
    return(
        <footer className="mt-5 p-5 bg-light text-center">
        <img src={logo} className="mb-1 " alt="logo" /><br/>
        <img src={desc} className="mb-1 " alt="desc" width="250" />
            
            <div id="footer_style">
                <div className="socialFooter">
                <ul>
                <li><a className="socialTag" target="_block" href="https://twitter.com/IntegralUnilko"><i className="fa fa-twitter"></i></a></li>
                <li><a className="socialTag" target="_block" href="https://www.facebook.com/integralunilko/"><i className="fa fa-facebook" ></i></a></li>
                <li><a className="socialTag" target="_block" href="https://instagram.com/integralunilko_official?igshid=e8ra2o9tnrfc"><i className="fa fa-instagram"></i></a></li>
                <li><a className="socialTag" target="_block" href="https://m.youtube.com/channel/UCjCK9tsNN_vEY3XW2C8L7Dw"><i className="fa fa-youtube"></i></a></li>
                </ul>
                </div>
            </div>   
            <div className="">
            <p>Integral University EventMaster @2020</p>
            <p>| All Rights Reserved |</p>
            <p>Developed By <a id="mybio" target="_block" href="https://zainul-aziz.github.io/Portfolio/index.html">Zainul Aziz</a></p>
            </div>
        </footer>
    )
};
export default Footer;