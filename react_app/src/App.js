import React from 'react';
import './app.css';
import CardComponent from './components/CardComponent';

function App() {
  return (
      <div className="app">
        <header> 
          <h1>Weather App</h1>
        </header>

        <body className='cards-container'>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </body>

        <footer>
          <input type="text" placeholder="Enter City Name" />
        </footer>

      </div>
  );
};

export default App;
