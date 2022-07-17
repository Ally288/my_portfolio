import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Homepage from './containers/Homepage';
import Projects from "./components/Projects";
import About from "./components/About";
import NavBar from './components/NavBar';
import Header from './components/Header';

const App = () => {


  return (

    <div>
    <Router>
      <>
      <Header />
      <NavBar />
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div className="container404"><h1>404 - Page does not exist</h1></div>} />
        </Routes>
      </>
    </Router>
    </div>
  );
}

export default App;
