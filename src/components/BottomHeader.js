import React, { Component } from 'react';
import '../components_style/BottomHeader.css';

class BottomHeader extends Component {
    render() {
        return (
            <div className="bottom-header">
                <h2>THE ULTIMATE WEB PLATFORM FOR DEVELOPERS AND DESIGNERS</h2>
                <p>Famo.us is a free, open source JavaScript framework that helps you create smooth, complex Uls for any screen.</p>
                <div className="buttons">
                    <button>Start Learning</button>
                    <button>Download</button>
                </div>
            </div>
        );
    }
}

export default BottomHeader;