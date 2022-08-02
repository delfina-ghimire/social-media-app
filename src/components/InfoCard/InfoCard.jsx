import { UilPen } from '@iconscout/react-unicons';
import { useState } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';
import './InfoCard.css';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className='infoCard'>
      <div className='infoCard__head'>
        <h2>Your Info</h2>
        <div className='infoCard__icon'>
          <UilPen
            width='2rem'
            height='2rem'
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className='InfoCard__info'>
        <span>
          <b>Lives in </b>
        </span>
        <span>Kathmandu</span>
      </div>

      <div className='InfoCard__info'>
        <span>
          <b>Relationship Status </b>
        </span>
        <span>Single</span>
      </div>

      <div className='InfoCard__info'>
        <span>
          <b>Works at </b>
        </span>
        <span>Delfi Tech</span>
      </div>

      <button className='btn btn--logout'>Logout</button>
    </div>
  );
};

export default InfoCard;
