import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import SearchBox from './components/SearchBox/SearchBox';
import Feedback from './components/Feedback/Feedback';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBoxExtension from './components/SearchBoxExtension/SearchBoxExtension';
import Scroll from './components/Scroll/Scroll';
import Edit from './components/Edit/Edit';
import ShowUserData from './components/ShowUserData/ShowUserData';
// import Modal from './components/Modal/Modal';


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
      isShowing: false,
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
      this.setState({menu: 'home', error: ''}) :
      this.setState({menu: 'search', error: ''})
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

  viewProfile = (id) => {
    this.setState({menu: 'view'})
    fetch(`http://localhost:3000/update/${id}`).then(response => {
        return response.json()
    }).then(data => {
        // console.log(data);
        this.setState({students: data})
    }).catch(err => console.log('error', err))
  }

  home = () => {
    console.log('home')
    this.setState({menu: 'home'})
    fetch('http://localhost:3000/').then(response => {
        return response.json()
    }).then(data => {
        // console.log(data);
        this.setState({students: data})
    }).catch(err => console.log('error', err))
    
  }

  edit = (id) => {
    // console.log(id)
    this.setState({menu: 'edit'})
    fetch(`http://localhost:3000/update/${id}`).then(response => {
        return response.json()
    }).then(data => {
        // console.log(data);
        this.setState({students: data})
    }).catch(err => console.log('error', err))

    
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
        
          <Navigation addAlumni={this.alumni} feedback={this.feedback} home={this.home}/>
          <Logo />
          <SearchBox search={ this.searchStudent }/>
          {this.state.error}
      
      </div>
      );
    }else if (this.state.menu === 'alumni'){
      return (
        <div className="App">
          <Particles 
            className='particles'
            params={ particlesOptions }
          />
          <p className='white center f1'>Display all Alumni. Coming soon...</p>
          <Navigation addAlumni={this.alumni} feedback={this.feedback} home={this.home}/>
          {/* <CardList users={filteredStudents}/> */}
          
        </div>
      );
    } else if (this.state.menu === 'search') {
      return (
        <div className="App">
          <Particles 
            className='particles'
            params={ particlesOptions }
          />
            
             <Navigation addAlumni={this.alumni} feedback={this.feedback} home={this.home}/>
            <h1 className='viewArea f1 white'>Gindiri Old Students Association Alumni</h1>
            {/* <p className='yellow'>for light & truth</p> */}
            <SearchBoxExtension search={this.searchStudent}/>
            {this.state.error}
   
            <Scroll> 
                <CardList users={filteredStudents}  view={this.viewProfile}/>
            </Scroll>  
           
        
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
    } else if (this.state.menu === 'edit'){
      return (
        <div className="App">
          <Particles 
            className='particles'
            params={particlesOptions}
          />
          {/* <p className='white center f1'>Display all Alumni. Coming soon...</p> */}
          <Navigation addAlumni={this.alumni} feedback={this.feedback} home={this.home}/>
          {/* <CardList users={filteredStudents}/> */}
          <Edit user={this.state.students} view={this.viewProfile} handleSubmit={this.handleSubmit}/>
          
        </div>
      );
    }  else if (this.state.menu === 'view') {
      return (
        <div className="App">
          <Particles 
            className='particles'
            params={particlesOptions}
          />
          {/* <p className='white center f1'>Display all Alumni. Coming soon...</p> */}
          <Navigation addAlumni={this.alumni} feedback={this.feedback} home={this.home}/>
          {/* <CardList users={filteredStudents}/> */}
          <ShowUserData user={this.state.students} edit={this.edit}/>
          
        </div>
      );
    } 
    } 
}

export default App;
