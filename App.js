import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
    { name: "AdamLL", Age: 12 },
    { name: "Tponny", Age: 14 },
    { name: "Jay", Age: 24 }

  ]
  }
  switchNameHandler = (changeVariable) =>
  {
   //console.log("Button was clicked");
   this.setState( {
    Persons: [
    { name: changeVariable , Age: 12 },
    { name: "rayan", Age: 14 },
    { name: "Jay", Age: 244 }

  ]
  }

   )
  }

  onChangeHandlre = (event) =>
  {
   //console.log("Button was clicked");
   this.setState( {
    Persons: [
    { name:  "AdamLL", Age: 12 },
    { name: event.target.value, Age: 14 },
    { name: "Jay", Age: 244 }
    ]
  }

   )
  }


 

  
  render() {

    const style ={
      backgroundColor:'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }

    return (
     
     
      <div className="App">
         <button style={style}
         onClick={this.switchNameHandler.bind(this,'maximo!!')}>swithc Name</button>
        <h1>HI i am react</h1>
        <Person 
        name={this.state.Persons[0].name} 
        Age={this.state.Persons[0].Age}/>
        <Person 
        name={this.state.Persons[1].name} 
        click={()=>this.switchNameHandler('varna##')}
        Age={this.state.Persons[1].Age}
        changeMade={this.onChangeHandlre}><p>My Hobbiles are Playing </p></Person>  
        <Person 
        name={this.state.Persons[2].name} 
        Age={this.state.Persons[2].Age}/>
        
      </div>
    );
  }
}

export default App;

 
/*import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  
  const [personState, setPerson] = useState({ 
    persons: [
    { name: "AdamLL", Age: 12 },
    { name: "Tponny", Age: 14 },
    { name: "Jay", Age: 24 }
    ],

otherState:'some other state'

  });
 
 const [CurrentState, newState] = useState({ otherState:'some other state'});
    console.log(personState,CurrentState);
 const switchNameHandler = () =>
  {
   //console.log("Button was clicked");
   setPerson( {
    persons: [
    { name: "AdamLL verna" , Age: 12 },
    { name: "Tponny verna", Age: 14 },
    { name: "Jay", Age: 244 }

  ]
  }

   )
  }

    return (
     
     
      <div className="App">
         
        <h1>HI i am react</h1>
        <Person name={personState.persons[0].name} Age={personState.persons[0].Age}/>
        <Person name={personState.persons[1].name} Age={personState.persons[1].Age}><p>My Hobbiles are Playing </p></Person>  
        <Person name={personState.persons[2].name} Age={personState.persons[2].Age}/>
        <button onClick={switchNameHandler}>swithc Name</button>
      </div>
    );
  
}

export default app;*/
