
// import Navbar from './component/Navbar';
import { Component } from './component/Navbar';
import Home from './component/Home';
import './index.css';
import React from 'react';
import ImageWithText from './component/Blogsection';
import BlogSection from './component/Blogsection';
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
      <Component></Component>
      {/* <Navbar></Navbar> */}
      <Home></Home>
      <BlogSection></BlogSection>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
