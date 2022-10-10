import React from 'react';
import './App.css';
import './Style/Style-mobile.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <section className="App" >
      <Header/>
      <Body/>
      <Footer/>
    </section>
  );
}

export default App;
