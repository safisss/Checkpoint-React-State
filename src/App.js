
import './App.css';

import React,{ Component } from 'react';

import im from './image/photo.png';


class App extends Component {
  constructor(props) 
{
    super(props);
    this.state = {

      person:{
        
      fullName: "Safa Sellami",
      bio: "have a diverse set of skills, ranging from design to HTML + CSS + JAVASCRIPT + REACT..",
      imgSrc: im,
      profession: "a full-stack web developer."

    },
  
    show : false,
    Counter : 0
   }
  }

  componentDidMount = () => {
   
    this.time = setInterval(()=> { 
    this.setState(ST=>({
      Counter: ST.Counter+1
    }) ) 

    },1000)

  }



  clearInterval = () => {

    clearInterval(this.time)

  }


  handleClick=()=> {
  this.setState({show: ! this.state.show})
}
  render() {
    return (

      <div classname="App"> {

    this.state.show && (   <div style={{color:"black", backgroundColor:"burlywood", textAlign:"center"}}> 
     <h1>My fullName is {this.state.person.fullName}</h1>
     <hr/>
          <h3>I {this.state.person.bio}</h3>
      <hr/>
         <img src= {this.state.person.imgSrc} alt="test"/>
      <hr/>
          <h3> And my profession is {this.state.person.profession}</h3>
     </div>
    
          )
        }

<div>

<button onClick={this.handleClick}>Click Me</button>
<h1>Counter: {this.state.Counter}</h1>
<br/>
<button onClick={this.clearInterval}>Stop Me</button>
</div>

      </div> 

    );
  }
}
 
export default App;