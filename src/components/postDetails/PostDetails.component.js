import React from 'react';

function PostDetailsComponent({ isLoading, title, body }) {

  const renderLoader = () => (
    <div>Ładowanie...</div>
  );

  const renderContent = () => (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );

  return isLoading ? renderLoader() : renderContent();
}

export default PostDetailsComponent;