import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextSection from '../components/TextSection';
import Counter from '../components/Counter';
import PostDetails from '../components/PostDetails';
import PostList from '../components/PostList';
import Form from '../components/Form';

const TEXTS = {
  footer: {
    text: 'Copyright 2020'
  }
};

function Home() {
  return (
    <div className="App" on>
      <Header />
      <PostDetails postId={1}/>
      <Form />
      <PostList />
      <Counter />
      <TextSection />
    </div>
  );
}

export default Home;
