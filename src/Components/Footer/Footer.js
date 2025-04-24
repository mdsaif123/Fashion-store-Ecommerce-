


import React from 'react';
import "./Footer.css";
import logo from "../Assets/newlogo.jpg"
import footer_image from "../Assets/logo_big.png";
import insttagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-logo d-flex justify-content-center align-items-center gap-3">
                            <img src={logo} alt=""  style={{width:"300px"}}/>
                            {/* <p>MYSHOP</p> */}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <ul className="footer-links d-flex justify-content-center gap-3">
                            <li>Company</li>
                            <li>Products</li>
                            <li>Offices</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="footer-social-icon d-flex justify-content-center gap-3">
                            <div className="footer-icons-container">
                                <img src={insttagram_icon} alt="" />
                            </div>
                            <div className="footer-icons-container">
                                <img src={pinterest_icon} alt="" />
                            </div>
                            <div className="footer-icons-container">
                                <img src={whatsapp_icon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-80 mx-auto mb-3" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-copyright d-flex flex-column align-items-center gap-3">
                            <p>Copyright-2024 &copy; : All right reserved</p>
                            <hr className="w-80 border-0 border-top border-3 border-dark rounded-2" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
