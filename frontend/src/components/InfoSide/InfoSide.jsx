import { UilSetting } from '@iconscout/react-unicons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../../img/comment.png';
import Home from '../../img/home.png';
import NotificationBell from '../../img/noti.png';
import ShareModal from '../ShareModal/ShareModal';
import TrendCard from '../TrendCard/TrendCard';
import './InfoSide.css';

const InfoSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='rightSide'>
      <div className='rightSide__nav'>
        <Link to='../home'>
          <img src={Home} alt='' />
        </Link>
        <UilSetting />
        <img src={NotificationBell} alt='' />
        <img src={Comment} alt='' />
      </div>
      <TrendCard />

      <button className='btn btn--info' onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default InfoSide;
