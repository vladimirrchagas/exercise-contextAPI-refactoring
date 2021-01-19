import React, { createContext, Component } from 'react';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import './App.css';

export const MyContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);

  }

  moveCar(car, status) {
    this.setState({
      ...this.state, cars: {
        ...this.state.cars, [car]: status,
      },
    });
  }

  changeSignal(newColor) {
    this.setState({
      ...this.state, signal: { color: newColor },
    });
  }

  render () {
    const { cars, signal } = this.state;
    const contextValues = {
      cars,
      signal,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    return (
      <MyContext.Provider value={ contextValues }>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
