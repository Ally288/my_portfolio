import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';



const NavBar = () => {


    return (
<>
<nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
</nav>
</>
    );
}

export default NavBar;