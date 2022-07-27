import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import InfoSide from '../../components/InfoSide/InfoSide';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide />
      <PostSide />
      <InfoSide />
    </div>
  );
};

export default Home;
