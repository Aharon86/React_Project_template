import React, { Component } from 'react';
import '../App_css/Header.css';

class Header extends Component {
  render() {
    return (
        <header className="flex-container">
            <div className="logo-toggle">
                <div className="logo">&#966;</div>
                <div id="toggle"></div>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#">Famo.us University</a></li>
                    <li><a href="#">Demos</a></li>
                    <li><a href="#">Famo.us/Angular</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
            <div className="download">
                <a href="#">Download</a>
            </div>
        </header>
    );
  }
}

export default Header;
