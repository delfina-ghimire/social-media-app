import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTimelinePosts } from '../../actions/PostAction';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return 'Follow some friends to see their posts!';
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className='posts'>
      {loading
        ? 'Fetching Posts...'
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
