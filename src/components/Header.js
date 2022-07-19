import React from "react";
import '../static/css/Header.css';
import GithubLogo from '../static/logos/Github.png';
import LinkedInLogo from '../static/logos/LinkedIn.png';
import FlickrLogo from '../static/logos/Flickr.png';
import EyeEmLogo from "../static/logos/EyeEm.png";
// import HeaderPhoto from "../static/headerbg/headerbg.jpeg";

const Header = () => {
    
    return (
    <>
    <header id="header">
        {/* <img src={HeaderPhoto} alt="AllyHeader"/> */}
    <h1>Under construction</h1>
    <p className="header-para">😎 Stay tuned! 😎</p>

        <h2>Welcome to Ally's Portfolio</h2>
        <h2>Junior Software Developer</h2>
        <div className="social-logos">
                <a href="https://github.com/Ally288" target="_blank"><img src={GithubLogo} alt="Github"></img></a>
                <a href="https://www.linkedin.com/in/alisdairsit/" target="_blank"><img src={LinkedInLogo} alt="Linkedin"></img></a>
                <a href="https://www.flickr.com/photos/87143063@N03/" target="_blank"><img src={FlickrLogo} alt="Flickr"></img></a>
                <a href="https://www.eyeem.com/u/29432049" target="_blank"><img src={EyeEmLogo} alt="EyeEm"></img></a>
        </div>
    <p>___________________________</p>
    </header>
    </>
    );
}

export default Header;