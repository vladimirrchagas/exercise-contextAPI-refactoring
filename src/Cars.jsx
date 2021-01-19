// src/Cars.jsx

import React, { Component } from 'react';
import { MyContext } from './App';

import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';


class Cars extends Component {
  render() {

    return (
      <MyContext.Consumer>
        { (value) =>{
          const { cars, moveCar } = value;
          const { red, yellow, blue } = cars;
          return (
            <div>
              <div>
                <img
                  className={red ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => moveCar('red', !red)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={blue ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => moveCar('blue', !blue)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={yellow ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => moveCar('yellow', !yellow)}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
        )}}
      </MyContext.Consumer>
    );
  }
}

export default Cars;