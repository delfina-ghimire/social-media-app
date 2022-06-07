import React from 'react';

import cover from '../../img/cover.jpg';
import profileImg from '../../img/profileImg.jpg';

import './ProfileCard.css';

const ProfileCard = () => {
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
          <div className='verticleLine'></div>
          <div className='follow'>
            <span>678</span>
            <span>Followings</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;
