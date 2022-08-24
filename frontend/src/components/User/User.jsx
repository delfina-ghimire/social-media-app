import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../actions/UserAction';
import './User.css';

const User = ({ person }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const dispatch = useDispatch();
  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  return (
    <div>
      <div className='followersCard__follower'>
        <div className='follower__container'>
          <img
            src={
              person.coverPicture
                ? serverPublic + person.profilePicture
                : serverPublic + 'defaultProfile.png'
            }
            alt=''
            className='follower__img'
          />
          <div className='follower__details'>
            <span className='follower__name'>{person.firstname}</span>
            <span className='follower__username'>{person.username}</span>
          </div>
        </div>
        <button
          className={following ? 'btn btn--unfollow' : 'btn btn--follow'}
          onClick={handleFollow}
        >
          {following ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default User;
