import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './index.css';
import Navbar from "./Navbar";
import {Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import SignUp from './SignUp';
import Contact from './Contact';
import Events from './Events';
import About from './About';
import Footer from "./Footer";
import Register from "./Register";
import AndazAwadh from './EventsFile/AndazAwadh'
import Rush from './EventsFile/Rush';
import BBS from './EventsFile/BBS';
import Tekken from './EventsFile/Tekken';
import Nukkad from './EventsFile/Nukkad';
import Treasure from './EventsFile/Treasure';
import SignIn from './SignIn';
const App =() =>
{
    return(
        <div>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/AndazAwadh" component={AndazAwadh}/>
            <Route exact path="/Rush" component={Rush}/>
            <Route exact path="/BBS" component={BBS}/>
            <Route exact path="/Treasure" component={Treasure}/>
            <Route exact path="/Nukkad" component={Nukkad}/>
            <Route exact path="/Tekken" component={Tekken}/>
            <Route exact path="/sign" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
            <Redirect to="/"/>
            
            <Home/>
            </Switch>
            <Footer/>
        </div>
    )
};
export default App;


//href="http://localhost:3000/about"