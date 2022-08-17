import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  //extracting posts
  const posts = useSelector((state)=>state.postReducer.posts)

  return (
    <div className='profileCard'>
      <div className='profileImgs'>
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + 'defaultCover.jpg'
          }
          v
          alt='cover photo'
          className='coverImg'
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + 'defaultProfile.png'
          }
          alt='profile photo'
          className='profileImg'
        />
      </div>

      <div className='profileName'>
        <span>
          {' '}
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : 'Write about yourself'}</span>
      </div>

      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className='vl'></div>
          <div className='follow'>
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>

          {location === 'profilePage' && (
            <>
              <div className='vl'></div>
              <div className='follow'>
                <span> {posts.filter((post) => post.userId === user._id).length} </span>
                Posts
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {location === 'profilePage' ? (
        ''
      ) : (
        <span>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/profile/${user._id}`}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
