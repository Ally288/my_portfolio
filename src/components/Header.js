import React from "react";
import styled from 'styled-components';
import GithubLogo from '../static/logos/Github.png';
import LinkedInLogo from '../static/logos/LinkedIn.png';
import EyeEmLogo from "../static/logos/EyeEm.png"

const Title = styled.h1`
color: red;
text-align: center;
`

const Paragraph = styled.p`
text-align: center;
`
const Socials = styled.a `
width: 50px;
margin: 20px;
`


const Header = () => {
    
    return (
    <>
    <Title>Under construction</Title>
    <Paragraph>😎 Stay tuned! 😎</Paragraph>

        <h1>Welcome to Ally's Portfolio</h1>
        <h2>Junior Software Developer</h2>
            <Socials>
                <a href="https://github.com/Ally288" target="_blank"><img src={GithubLogo} alt="Github"></img></a>
                <a href="https://www.linkedin.com/in/alisdairsit/" target="_blank"><img src={LinkedInLogo} alt="Linkedin"></img></a>
                <a href="https://www.eyeem.com/u/29432049" target="_blank"><img src={EyeEmLogo} alt="EyeEm"></img></a>
            </Socials>
        {/* add socials */}
        <p>___________________________</p>
    </>
    );
}

export default Header;