import React from 'react';
import './InfoSide.css';
import Home from '../../img/home.png';
import NotificationBell from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
import TrendCard from '../TrendCard/TrendCard';

const InfoSide = () => {
  return (
    <div className='rightSide'>
      <div className='rightSide__nav'>
        <img src={Home} alt='' />
        <UilSetting />
        <img src={NotificationBell} alt='' />
        <img src={Comment} alt='' />
      </div>
      <TrendCard />
      <button className='btn btn--info'>Share</button>
    </div>
  );
};

export default InfoSide;
