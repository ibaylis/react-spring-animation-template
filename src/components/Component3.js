import React, { Component } from 'react';
import { Spring } from 'react-spring';

class Component3 extends Component {
  render() {
    return (
      <div style={c3Style}>
        <h1>Component2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          iusto dicta sequi repellat perspiciatis recusandae. Vel ducimus cum
          labore explicabo numquam a in beatae quasi! Fugit nisi adipisci a
          impedit.
        </p>
      </div>
    );
  }
}

const c3Style = {
  background: 'skyblue',
  color: 'white',
  padding: '1.5rem 1.5rem 5rem 1.5rem'
};

export default Component3;
