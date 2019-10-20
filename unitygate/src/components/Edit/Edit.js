import React from 'react';
import './Edit.css';


class Edit extends React.Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            name: '',
            year: '',
            house: '',
            occupation: '',
            gender: '',
            mobile: '',
            email: '',

            page: 'edit'
        }
    }

   
onNameChange = (event) => this.setState({name: event.target.value})
    
onYearChange = (event) => this.setState({year: event.target.value})

onHouseChange = (event) => this.setState({house: event.target.value})

onOccupationChange = (event) => this.setState({occupation: event.target.value})

onGenderChange = (event) => this.setState({gender: event.target.value})

onMobileChange = (event) => this.setState({mobile: event.target.value})

onEmailChange = (event) => this.setState({email: event.target.value})
    

onSubmitUpdate = () => {
    
        fetch('http://localhost:3000/update', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                year: this.state.year,
                house: this.state.house,
                occupation: this.state.occupation,
                gender: this.state.gender,
                mobile: this.state.mobile,
                email: this.state.email
            })
            
          }).then(console.log);

          this.setState({page: 'success'})
    }

componentWillReceiveProps(user) {
    
    this.setState({id: this.props.user[0].id});
    }


render() {    
    const {user, view} = this.props;

   if (this.state.page === 'edit'){
    return (
        <div>
            <div className='w-third bg-white'>
            <article className="pa4 black-80 ">
                <form action="sign-up_submit" method="put" className='bg-white'onSubmit={ this.onSubmitUpdate }>
                    <fieldset id="sign_up" className="ba b--transparent gray ph0 mh0">
                        {/* <legend className="ph0 mh0 fw6 clip">Hello, {user[0].name}</legend> */}
                        <h1 className='green'>{`Hello, ${user[0].name}`}</h1>
                        <p className='red'>***All fields are required***</p>
                        <hr></hr>
                        <div className="mt3">
                            {/* <label className="db fw4 lh-copy f6" htmlFor="name">Name</label> */}
                            <input 
                                className="pa2 input-reset ba bg-transparent gray w-100 measure" 
                                type="text" 
                                name="id"  
                                required 
                                placeholder= {user[0].id === null? 'ID: ' : user[0].id }
                                id="id"
                                disabled
                                // onChange={ }
                                >
                            </input>
                        </div>
                        <div className="mt3">
                            {/* <label className="db fw4 lh-copy f6" htmlFor="name">Name</label> */}
                            <input 
                                className="pa2 input-reset ba bg-transparent gray w-100 measure" 
                                type="text" 
                                name="name"  
                                required 
                                placeholder= {user[0].name === null ? 'Name' : `Name: ${user[0].name}`}
                                id="name"
                                onChange={ this.onNameChange }>
                            </input>
                        </div>

                        <div className="mt3">
                            {/* <label className="db fw4 lh-copy f6" htmlFor="year">Year</label> */}
                            <input 
                                className="pa2 input-reset ba bg-transparent gray w-100 measure" 
                                type="text" 
                                name="year"  
                                required 
                                placeholder= {user[0].year === null ? 'Year: ' : `Year: ${user[0].year}`}
                                id="year"
                                onChange={ this.onYearChange }>
                            </input>
                        </div>

                        <div className="mt3">
                            {/* <label className="db fw4 lh-copy f6" htmlFor="house">house</label> */}
                            <input 
                                className="pa2 input-reset ba bg-transparent gray w-100 measure" 
                                type="text" 
                                name="house"  
                                required 
                                placeholder= {user[0].house === null ? 'House: ' : `House: ${user[0].house}`}
                                id="house"
                                onChange={ this.onHouseChange }>
                            </input>
                        </div>

                        <div className="mt3">
                            {/* <label className="db fw4 lh-copy f6" htmlFor="occupation">Occupation</label> */}
                            <input 
                                className="pa2 input-reset ba bg-transparent gray w-100 measure" 
                                type="text" 
                                name="occupation"  
                                required 
                                placeholder= {user[0].occupation === null ? 'Occupation: ' : `Occupation: ${user[0].occupation}`} 
                                id="occupation"
                                onChange={ this.onOccupationChange }>
                            </input>
                        </div>

                        <div className="mt3">
                            {/* <label className="db fw4 lh-copy f6" htmlFor="gender">Gender</label> */}
                            <input 
                                className="pa2 input-reset ba bg-transparent gray w-100 measure" 
                                type="text" 
                                name="gender"  
                                required 
                                placeholder= {user[0].gender === null ? 'Gender: ' : `${user[0].gender}`} 
                                id="gender"
                                onChange={ this.onGenderChange }>
                            </input>
                        </div>

                        <div className="mt3">
                            {/* <label className="db fw4 lh-copy f6" htmlFor="mobile">Mobile</label> */}
                            <input 
                                className="pa2 input-reset ba bg-transparent gray w-100 measure" 
                                type="text" 
                                name="mobile"  
                                required 
                                placeholder= {user[0].mobile === null ? 'Mobile: ' : `Mobile: ${user[0].mobile}`} 
                                id="mobile"
                                onChange={ this.onMobileChange }>
                            </input>
                        </div>

                        <div className="mt3">
                            {/* <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label> */}
                            <input 
                                className="pa2 input-reset ba bg-transparent gray w-100 measure" 
                                type="email" 
                                name="email-address"  
                                required 
                                placeholder= {user[0].email === null ? 'Email: ' : `Email: ${user[0].email}`}
                                id="email-address"
                                onChange={ this.onEmailChange }>
                            </input>
                        </div>

                    </fieldset>
                    <div className='update-button'>
                    <div className="mt3">
                        <button 
                            className="f6 link dim ba fl w-50 ph3 pv2 mb2 dib white bg-green pointer" 
                            type="submit" 
                            value="submit">
                                Update
                        </button>
                    </div>
                    <div className="mt3">
                        <button 
                            className="f6 link dim ba fl w-50 ph3 pv2 mb2 dib white bg-green pointer" 
                            type="submit"
                            onClick={view} 
                            value="submit">
                                View Profile
                        </button>
                    </div>
                    </div>
                </form>
        </article>
    </div>
        </div>
        );
        } else if (this.state.page === 'success') {
            return (
                <div className='container'> 
        <div className='w-third'>  
        <main className="pa4 black-80 shadow-2 bg-white">
            {/* <hr></hr> */}
            <h1 className='head green'>{ user[0].name} Profile Updated.</h1>
            <hr></hr>
            <div className="container">
                <p className="container">{ `Year Graduated: ${user[0].year}` }</p>
                <p className="container">{ `Gender: ${user[0].gender}` }</p>
                <p className="container">{ `Mobile No: ${user[0].mobile === null ? 'N/A' : user[0].mobile}` }</p>
                <p className="container">{ `Occupation: ${user[0].occupation === null ? 'N/A' : user[0].occupation}` }</p>
                <p className="container">{ `Email: ${user[0].email === null ? 'N/A' : user[0].email}` }</p>
                <p className="container">{ `House: ${user[0].house === null ? 'N/A' : user[0].house}` }</p>
            </div>
            {/* <hr></hr> */}
            <div className='center'>
                 <button className="updateprofile f6 link dim ba ph3 pv2 mb2 dib white bg-green pointer" 
                onClick={ view }>View Profile</button> 
                <button className="updateprofile f6 link dim ba ph3 pv2 mb2 dib white bg-green pointer" >
                    Contact { user[0].name }
                </button>
            </div>
        </main>
        </div>
        </div>
            );
        }
    }

}


export default Edit;