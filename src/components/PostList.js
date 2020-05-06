import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
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

  renderPostList = () => this.state.postList.map((postElement) => (
    <Link key={postElement.id} to={`/post/${postElement.id}`}>
      {postElement.title}
    </Link>
  ));


  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h2>Inne posty:</h2>
        {isLoading && <div>Ładowanie danych...</div>}
        {!isLoading && this.renderPostList()}
      </div>
    )
  }
}

export default PostList;