import React from 'react';
import NavTabs from './components/layout/Header'; 
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <NavTabs></NavTabs>
      </header>
    </div>
  );
}

export default App;
