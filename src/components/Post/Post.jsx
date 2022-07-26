import React from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLiked from '../../img/notlike.png';

const Post = ({ data }) => {
  return (
    <div className='post'>
      <img className='post__image' src={data.img} alt='post data' />

      <div className='post__reaction'>
        <img src={data.liked ? Heart : NotLiked} alt='liked' />
        <img src={Comment} alt='' />
        <img src={Share} alt='' />
      </div>
      <span>{data.likes} Likes</span>
      <div className='post__details'>
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
