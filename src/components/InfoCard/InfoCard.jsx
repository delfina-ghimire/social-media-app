import { UilPen } from '@iconscout/react-unicons';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <div className='infoCard'>
      <div className='infoCard__head'>
        <h2>Your Info</h2>
        <div className='infoCard__icon'>
          <UilPen width='2rem' height='2rem' />
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
