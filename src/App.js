import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  console.log(personsState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  const style = {
    backgroundColor: 'White',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a react app!</h1>
      <p>This is really working!</p>
      <button
        style={style}
        onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler}
        changed={nameChangedHandler} >My hobbies: Racing</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
}

export default App;



