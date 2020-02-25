import React from 'react';
import './App.css';
import Headline from './components/headline/Headline';
import Header from './components/header/Header'


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Header />
         <Headline header='Posts' desc='Click the button to render props' />
         </header>
    </div>
  );
}

export default App;
