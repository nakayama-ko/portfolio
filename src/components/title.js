import React from 'react';
import '../App.css'

function Title() {
    return (
        <div className="Title dark" id="Title">
            <h1>Nakayama's Portfolio Site</h1>
            <div className="TitleBar">
                <a className="TitleContent" href="#Title">HOME</a>
                <a className="TitleContent" href="#AboutME">ABOUTME</a>
                <a className="TitleContent" href="#Skills">SKILLS</a>
                <a className="TitleContent" href="#Works">WORKS</a>
                <a className="TitleContent" href="#Contact">CONTACT</a>
            </div>
        </div>
    );
}

export default Title;