import './App.css';
import React from 'react';

class App extends React.Component {
  render () {
    const sum = (a, b) => a + b;
    const somma = <h1>{sum(2, 1)}</h1>;
    return <div>{somma}</div>
}
}

export default App;
