import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import SearchBox from './components/SearchBox/SearchBox';
import Feedback from './components/Feedback/Feedback';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBoxExtension from './components/SearchBoxExtension/SearchBoxExtension';


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
      searchField: '',
      students: [],
      menu: 'home',
      error: '',
      isModal: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/').then(response => {
        return response.json()
    }).then(data => {
        // console.log(data);
        this.setState({students: data})
    }).catch(err => console.log('error', err))
}


  searchStudent = (e) => {
    e.preventDefault()
    
    const search = document.getElementById('gosa')
    // console.log('button', typeof(search.value))
    const searchInput = search.value
    if(searchInput.length === 0){
      this.state.menu === 'home' ?
      this.setState({menu: 'home', error: 'Invalid input'}) :
      this.setState({menu: 'search', error: 'invalid input'})
    } else {
    this.setState({searchField: searchInput, menu: 'search'})
    }
  }

  alumni = () => {
    // console.log('click');
    this.setState({menu: 'alumni'})
  }

  feedback = () => {
    this.setState({menu: 'feedback'})
  }

  render (){

    let filteredStudents;

    if(this.state.students.length) {

      filteredStudents = this.state.students.filter((students) => {
        return students.name.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
        students.year.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
    
    // console.log(filteredStudents)
  }


  // console.log(filteredStudents)
    
 

    if (this.state.menu === 'home'){
      return (
        <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions}
        />
       
        <Navigation addAlumni={this.alumni} feedback={this.feedback}/>
        <Logo />
        <SearchBox search={this.searchStudent}/>
        {this.state.error}
      
      </div>
      );
    }else if (this.state.menu === 'alumni'){
      return (
        <div className="App">
          <Particles 
            className='particles'
            params={particlesOptions}
          />
          <p className='white center f1'>Display all Alumni. Coming soon...</p>
          {/* <CardList users={filteredStudents}/> */}
          
        </div>
      );
    } else if (this.state.menu === 'search') {
      return (
        <div className="App">
          <Particles 
            className='particles'
            params={particlesOptions}
          />
          <h1 className='viewArea f1 white shadow-2 static'>Gindiri Old Students Association Alumni</h1>
          <SearchBoxExtension search={this.searchStudent}/>
          {this.state.error}
          <CardList users={filteredStudents}/>
          {/* <SearchBox search={this.searchStudent}/> */}
          {/* {console.log('to cardlist', filteredStudents)} */}
          
        </div>
      );
    } else if (this.state.menu === 'feedback') {
      return (
        <div>
          <Particles 
            className='particles'
            params={particlesOptions}
          />
          <Feedback />
        </div>
      );
    }     
    }
}

export default App;
