import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TextSection from './TextSection';
import Counter from './Counter';

const TEXTS = {
  footer: {
    text: 'Copyright 2020'
  }
};

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <TextSection />
      <Footer text={TEXTS.footer.text}/>
    </div>
  );
}

export default App;
