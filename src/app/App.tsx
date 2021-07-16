import React from 'react';
import logo from './logo.svg';
import '../assets/styles/coming-soon.css';
import '../assets/styles/vendor.css';
import Header from "./comingSoon/Header";
import Intro from "./comingSoon/Intro";
import Footer from "./comingSoon/Footer";

function App() {
  return (
      <div className="ss-show">
        <div className="s-pagewrap">
          <Header />
          <Intro />
          <Footer />
        </div>
      </div>
  );
}

export default App;
