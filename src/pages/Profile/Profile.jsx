import InfoSide from '../../components/InfoSide/InfoSide';
import PostSide from '../../components/PostSide/PostSide';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profilePage'>
      <ProfileLeft />
      <div className='profilePage__center'>
        <ProfileCard />
        <PostSide />
      </div>
      <InfoSide/>
    </div>
  );
};

export default Profile;
