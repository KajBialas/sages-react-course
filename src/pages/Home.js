import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextSection from '../components/TextSection';
import CounterComponent from '../components/counter/Counter.component';
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
    <div className="App">
      <Header />
      <PostDetailsContainer />
      <Form />
      <PostListContainer />
      <CounterComponent />
      <TextSection />
    </div>
  );
}

export default Home;
