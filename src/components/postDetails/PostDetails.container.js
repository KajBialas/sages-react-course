import React, { Component } from 'react';
import PostDetailsComponent from './PostDetails.component';
import PropTypes from 'prop-types';

class PostDetailsContainer extends Component {
  static defaultProps = {
    postId: '5',
  };

  static propTypes = {
    postId: PropTypes.string.isRequired,
  };

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
      <PostDetailsComponent isLoading={isLoading} title={title} body={body} />
    )
  }
}

export default PostDetailsContainer;