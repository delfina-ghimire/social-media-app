import React from 'react';
import PostNav from '../PostNav/PostNav';
import Posts from '../Posts/Posts';
import './PostSide.css';

const PostSide = () => {
  return (
    <div className='postSide'>
      <div className='postSide__nav'>
        <PostNav />
        <Posts/>
      </div>
    </div>
  );
};

export default PostSide;
