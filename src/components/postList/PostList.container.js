import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostListComponent from './PostList.component';

class PostListContainer extends Component {
  state = {
    postList: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setTimeout(() => {
        this.setState({
          postList: data,
          isLoading: false,
        })
      }, 4000))
  }

  render() {
    const { isLoading, postList } = this.state;
    return (
      <PostListComponent isLoading={isLoading} postList={postList} />
    )
  }
}

export default PostListContainer;