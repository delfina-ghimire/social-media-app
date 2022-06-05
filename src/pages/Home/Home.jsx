import React from 'react';
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide />
      <div className='postSide'>post</div>
      <div className='infoSide'>info</div>
    </div>
  );
};

export default Home;
