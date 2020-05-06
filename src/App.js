import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextSection from './components/TextSection';
import Counter from './components/Counter';
import PostDetails from './components/PostDetails';
import PostList from './components/PostList';

const TEXTS = {
  footer: {
    text: 'Copyright 2020'
  }
};

function App() {
  return (
    <div className="App">
      <Header />
      <PostDetails />
      <PostList />
      <Counter />
      <TextSection />
      <Footer text={TEXTS.footer.text}/>
    </div>
  );
}

export default App;
