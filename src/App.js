import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.css';
import ReactGA from 'react-ga';
import { Routes, Route, Link } from "react-router-dom";
import { IconName } from "react-icons";
import Resources from "./components/Resources";

class App extends React.Component{

  initReactGA = () => {
    ReactGA.initialize('UA-228730145-1');
    ReactGA.pageview('test-init-pageview');
  };
  componentDidMount(){
    this.initReactGA();
  }

  render(){
  return (
    <div className="App">
      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          color: 'white',
          backgroundColor:"white"
        }}
      >
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path="resources" element={<Resources />} />
      </Routes>
      </nav>
    </div>
  );
}
}


export default App;
