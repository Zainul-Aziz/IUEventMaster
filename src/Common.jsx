import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../src/images/img1.jpg';
const Common = (props) => {
    return (
        // <h1>Welcome AboutPage</h1>
        <section id="header" className="margintop d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 mb-3">
                            <h1>{props.name} <strong>EventMaster</strong></h1> 
                                <h2 className="my-3">
                                {/* Grow your extra skills. */}
                                </h2>
                                <p>{props.content1}</p>
                                <p>{props.content2}</p>
                                <p>{props.content3}</p>
                                <div className="mt-5">
                                    <NavLink to={props.visit} className="btn btnlg btn-outline-primary">{props.btname}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 order-1 order-2 header-img">
                                <img src={props.imgsrc} className="img-fluid placeImg" alt="homeimage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    );
};
export default Common;