import { useSelector } from 'react-redux';
import FollowersCard from '../FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import './ProfileLeft.css';

const ProfileLeft = () => {
  const state = useSelector((state) => state);
  return (
    <div className='profileLeft'>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
