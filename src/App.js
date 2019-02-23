import React, { Component } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import BottomHeader from "./components/BottomHeader";
import Footer from "./components/Footer";
import "./App.css";


class App extends Component {
    render(){
        return(
            <div className="container">
                <Header/>
                <BottomHeader/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}

export default App;