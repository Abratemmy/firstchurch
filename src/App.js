import React from 'react';
import './App.css';
import Router from './pages/router';
import Landing from './components/landing';
// import Navigation from './components/navigation';




function App() {
  return (
    <div className="App">
      <Landing />
      {/* <Navigation /> */}
      <Router />
      
      
    </div>
  );
}

export default App;
