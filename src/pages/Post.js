import React from 'react';
import PostDetails from '../components/PostDetails';

function Post(props) {
  return(
    <div>
      <PostDetails postId={props.match.params.id} />
    </div>
  )
}

export default Post;