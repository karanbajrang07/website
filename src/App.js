import React from 'react';
import logo from './logo.JPG';
import './App.css';
import backg from './backg.jpg';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backg})` }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Karan Bajrang Bishnoi
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/karan-bajrang-bishnoi"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin Profile
        </a>
        <div className="abc">
   
   <p>software developer</p>
   <p> politics enthusiast </p>  
   <p>real madrid Fan</p>  
  </div>
      </header>
   
    </div>
  );
}

export default App;
