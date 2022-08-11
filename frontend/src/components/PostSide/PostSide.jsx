import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import './PostSide.css';

const PostSide = () => {
  return (
    <div className='postSide'>
      <div className='postSide__nav'>
        <PostShare />
        <Posts />
      </div>
    </div>
  );
};

export default PostSide;
