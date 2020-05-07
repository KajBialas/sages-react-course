import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextSection from '../components/TextSection';
import Counter from '../components/Counter';
import PostDetailsContainer from '../components/postDetails/PostDetails.container';
import PostListContainer from '../components/postList/PostList.container';
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
      <PostDetailsContainer />
      <Form />
      <PostListContainer />
      <Counter />
      <TextSection />
    </div>
  );
}

export default Home;
