import cover from '../../img/cover.jpg';
import profileImg from '../../img/profileImg.jpg';

import './ProfileCard.css';

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className='profileCard'>
      <div className='profileImgs'>
        <img src={cover} v alt='cover photo' className='coverImg' />
        <img src={profileImg} alt='profile photo' className='profileImg' />
      </div>

      <div className='profileName'>
        <span> Alexandria Hem</span>
        <span>Fullstack Developer</span>
      </div>

      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>6782</span>
            <span>Followers</span>
          </div>
          <div className='vl'></div>
          <div className='follow'>
            <span>678</span>
            <span>Followings</span>
          </div>
          {ProfilePage && (
            <>
              <div className='vl'></div>
              <div className='follow'>
                <span>9</span>
                Posts
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? '' : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
