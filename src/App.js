import React from 'react';
import './App.css';
import Headline from './components/headline/Headline';
import Header from './components/header/Header'

const tempArray = [
   {
      first: 'John', 
      last: 'Bozarov', 
      age: 34, 
      email: 'usaboz@gmail.com', 
      onlineStatus: true
   }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Header />
         <Headline header='The Header' desc='Click the button to render props' tempArray={tempArray} />
         </header>
    </div>
  );
}

export default App;
