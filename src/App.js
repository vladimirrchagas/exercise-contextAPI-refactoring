import React, { Component, createContext } from 'react';
import './App.css';
import Cars from './Cars';

export const MyContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, status) {
    this.setState({ ...this.state, cars: { ...this.state.cars, [car]: status } });
  };

  render () {
    const contextValue = {
      car: this.state.cars,
      moveCar: this.moveCar,
    };

    return (
      <MyContext.Provider value={ contextValue }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
