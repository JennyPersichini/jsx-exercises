import './App.css';
import React from 'react';

class App extends React.Component {
  render () {
    const name = 'Jimmy'
    const hello = <h1>Hello, {name}</h1>
      return <div>{hello}</div>
}
}

export default App;
