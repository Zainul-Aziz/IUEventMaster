import React from 'react';
//import Register from "./Register";
// import { NavLink } from 'react-router-dom';
const CardAbout = (props) => {
    return(
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card m-2 mt-4">
                                <img src={props.eventImg} className="card-img-top placeImg" alt="imgcard" />                                
                            </div>
                        </div>                    
    );
};
export default CardAbout;