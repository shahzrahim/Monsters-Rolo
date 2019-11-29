import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [
        { 
          name : 'Frankenstein',
          id:'ascs1' 
        },
        { 
          name : 'Dracula',
          id:'ascs2' 
        },
        { 
          name : 'Zombie',
          id:'ascs3' 
        },
      ]
    };
  }

  // https://jsonplaceholder.typicode.com/users
  render() {
    return (
      <div className="App">
        {
         this.state.monsters.map(monster => <h2 key={monster.id}>{monster.name}</h2>) 
        }
      </div>
    );
  }

}
export default App;
