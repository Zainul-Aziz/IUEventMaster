import React from 'react';
import web from '../src/images/AboutImages/3.jpg';
//import { NavLink } from 'react-router-dom';
//import img from '../src/images/img1.jpg';
import Common from './Common';
import './index.css';
const Home = () => {
    return (
        // <h1>Welcome Homepage</h1>

        <Common name="Integral University" 
        content1="Integral University, a seat of educational excellence, is a premier university in Lucknow, the
        capital city of the state of Utar Pradesh, India. It was established under the Act Number 9 of
        2004 by the State Government. The University is duly approved by the University Grants
        Commission (UGC) under sections 2(f) and 12B of the UGC Act, 1956, 7edical Council of
        India, Pharmacy Council of India, Indian Nursing Council, Council of Architecture, Bar Council
        of India, Indian Association of Physiotherapists, National Council for Teacher Education, UP
        State 7edical Faculty and Distance Education Bureau."

        content2="Integral University is accredited by NAAC and recognised as a Scientiic c Industrial lesearch
        Organisation (SIlO) by the Department of Scientiic c Industrial lesearch, 7inistry of
        Science c Technology, Government of India"
        imgsrc={web} 
        visit="/about" 
        btname="Get Started" />
    );
};
export default Home;