import { PostsData } from '../../data/postsData';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
  return (
    <div className='posts'>
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
