import React, { Component, useEffect, useState, useReducer } from 'react';
import PostDetailsComponent from './PostDetails.component';
import PropTypes from 'prop-types';
import {
  POST_DETAILS_INITIAL_STATE,
  POST_DETAILS_ACTION_TYPES,
  postDetailsReducer
} from './PostDetails.reducer';

function PostDetailsContainer({postId}) {
  const [ postDetailsState, dispatch ] = useReducer(postDetailsReducer, POST_DETAILS_INITIAL_STATE);

  const [ counter, setCounter ] = useState(0);


  useEffect(() => {
    dispatch({type: POST_DETAILS_ACTION_TYPES.SET_LOADING});

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setTimeout(() => {
        dispatch({type: POST_DETAILS_ACTION_TYPES.SET_DATA, value: data});

      }, 4000))
  }, []);

  const { data: {title, body,}, isLoading } = postDetailsState;

  return <PostDetailsComponent isLoading={isLoading} title={title} body={body} />
}

PostDetailsContainer.defaultProps = {
  postId: '5',
};

PostDetailsContainer.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostDetailsContainer;