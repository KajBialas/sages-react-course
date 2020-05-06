import React, { Component } from 'react';

class PostDetails extends Component {
  state = {
    postDetail: {},
    isLoading: false,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        postDetail: data,
      }))
      .catch();
  }

  render() {
    return (
      <div>
        <h2>{this.state.postDetail.title}</h2>
        <p>{this.state.postDetail.body}</p>
      </div>
    )
  }
}

export default PostDetails;