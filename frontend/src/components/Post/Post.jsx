import { useSelector } from 'react-redux';
import Comment from '../../img/comment.png';
import Heart from '../../img/like.png';
import NotLiked from '../../img/notlike.png';
import Share from '../../img/share.png';
import './Post.css';

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <div className='post'>
      <img
        className='post__image'
        src={data.img ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ' '}
        alt='post data'
      />

      <div className='post__reaction'>
        <img src={data.liked ? Heart : NotLiked} alt='liked' />
        <img src={Comment} alt='' />
        <img src={Share} alt='' />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '14px' }}>
        {data.likes} Likes
      </span>
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
