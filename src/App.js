import React from 'react';
import styled from 'styled-components';
import './App.css';


const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
