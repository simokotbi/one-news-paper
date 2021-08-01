import logo from './logo.svg';
import './App.css';
import Introduction from './Components/Introduction';
import Footer from './Components/Footer';
import styled from "styled-components";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Introduction/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
