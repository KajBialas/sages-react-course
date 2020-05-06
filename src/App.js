import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TextSection from './TextSection';

const TEXTS = {
  footer: {
    text: 'Copyright 2020'
  }
};

function App() {
  return (
    <div className="App">
      <Header />
      <TextSection />
      <Footer text={TEXTS.footer.text}/>
    </div>
  );
}

export default App;
