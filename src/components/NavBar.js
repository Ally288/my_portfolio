import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import styled from 'styled-components';

import PortfolioHomePage from "../containers/PortfolioHomepage";
import Portfolio from "./Portfolio";
import About from "./About";


const NavBar = () => {


    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<PortfolioHomePage />} />
                <Route path="/projects" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default NavBar;