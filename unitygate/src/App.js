import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }, 
    color:{
      value: '#ffffff'
    },
    size:{
      anim: {
         enable: true,
          speed: 1,
          size_min: 0,
          sync: true
      },
      value: 5        
    }
  },
  interactivity:{
    onhover:{
      enable: true,
      mode: 'repulse'
    }
  }
}

class App extends React.Component {
  constructor(prop){
    super(prop)
    this.state = {

    }
  }
  render (){
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <SearchBox />
      </div>
    );
    }
}

export default App;
