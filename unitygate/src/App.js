import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
       <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      {/*<SearchBox />*/}
    </div>
  );
}

export default App;
