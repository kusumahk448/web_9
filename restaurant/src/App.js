import React from 'react';
import Imagefetcher from './Imagefetcher'; // Adjust the path as necessary
import Login from './Login'; // Adjust the path as necessary

const App = () => {
  return (
    <div>
      <Login />
      <div className="image-container">
        <Imagefetcher />
      </div>
    </div>
  );
};

export default App;
