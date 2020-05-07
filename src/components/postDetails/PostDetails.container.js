import React, { Component, useEffect, useState } from 'react';
import PostDetailsComponent from './PostDetails.component';
import PropTypes from 'prop-types';

function PostDetailsContainer({postId}) {
  const [postDetails, setPostDetails] = useState({
    isLoading: false,
    data: {},
  });


  useEffect(() => {
    setPostDetails({
      ...postDetails,
      isLoading: true,
    });

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setTimeout(() => {
        setPostDetails({
          isLoading: false,
          data,
        });

      }, 4000))
  }, []);

  const { data: {title, body,}, isLoading } = postDetails;

  return <PostDetailsComponent isLoading={isLoading} title={title} body={body} />
}

PostDetailsContainer.defaultProps = {
  postId: '5',
};

PostDetailsContainer.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostDetailsContainer;