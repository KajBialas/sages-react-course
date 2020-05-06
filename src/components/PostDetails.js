import React, { Component } from 'react';

class PostDetails extends Component {
  state = {
    postDetail: {},
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
      .then(response => response.json())
      .then(data => setTimeout(() => {
        this.setState({
          postDetail: data,
          isLoading: false,
        })
      }, 4000))
  }


  render() {
    const { isLoading, postDetail: { title, body }} = this.state;
    return (
      <div>
        {isLoading && <div>Ładowanie danych...</div>}
        {!isLoading && <>
          <h2>{title}</h2>
          <p>{body}</p>
        </>}

      </div>
    )
  }
}

export default PostDetails;