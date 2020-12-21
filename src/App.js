import React from 'react'
import Nav from './components/Nav'
//Global Style
import GlobalStyle from './components/GlobalStyle'
//Import Pages
import AboutUs from './pages/AboutUs'


function App() {
  return (
    <div className="App">
      <AboutUs />
      <Nav />
      <GlobalStyle />
    </div>
  );
}

export default App;
