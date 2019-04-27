import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const cars = [
    { name: 'Honda', type: "CRV" },
    { name: 'Toyota', type:"Highlander" },
    { name: 'Ford', type: "F-150" },
    { name: 'Suburu',type: "Crosstrek" }
  ];

  return <List cars={cars} />;
};

const List = props => {
  const listItems = props.cars.map((cars, index) => (
    <li key={index}>
      {cars.name}: {cars.type}
    </li>
  ));

  return <ol>{listCars}</ol>;
};

ReactDOM.render(<App />, document.getElementById('root'));