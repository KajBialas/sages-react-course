import React from 'react';
import { Link } from 'react-router-dom';

function PostListComponent({ isLoading, postList }) {
  const renderLoader = () => (
    <div>Ładowanie...</div>
  );

  const renderList = () => postList.map((postElement) => (
    <div key={postElement.id}>
      <Link  to={`/post/${postElement.id}`}>
        {postElement.title}
      </Link>
    </div>
  ));

  return (
    <div>
      <h2>Lista postów</h2>
      {isLoading ? renderLoader() : renderList()}
    </div>
  );
}

export default PostListComponent;