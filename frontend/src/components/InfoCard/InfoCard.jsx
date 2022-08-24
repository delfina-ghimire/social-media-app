import { UilPen } from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { logOut } from '../../actions/AuthAction.js';
import * as UserApi from '../../api/UserRequest.js';
import ProfileModal from '../ProfileModal/ProfileModal';
import './InfoCard.css';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();

  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  const { user } = useSelector((state) => state.authReducer.authData);

useEffect(() => {
  const fetchProfileUser = async () => {
    if (profileUserId === user._id) {
      setProfileUser(user);
    } else {
      const profileUser = await UserApi.getUser(profileUserId);
      setProfileUser(profileUser);     
    }
  };
  fetchProfileUser();
}, [user]);

const handleLogout = () => {
  dispatch(logOut());
};

return (
  <div className='infoCard'>
    <div className='infoCard__head'>
      <h2>Profile Info</h2>
      {user._id === profileUserId ? (
        <div className='infoCard__icon'>
          <UilPen
            width='2rem'
            height='2rem'
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data={user}
          />
        </div>
      ) : (
        ''
      )}
    </div>

    <div className='InfoCard__info'>
      <span>
        <b>Lives in </b>
      </span>
      <span>{profileUser.livesIn}</span>
    </div>

    <div className='InfoCard__info'>
      <span>
        <b>Relationship Status </b>
      </span>
      <span>{profileUser.relationship}</span>
    </div>

    <div className='InfoCard__info'>
      <span>
        <b>Works At </b>
      </span>
      <span>{profileUser.worksAt}</span>
    </div>

    <button className='btn btn--logout' onClick={handleLogout}>
      Logout
    </button>
  </div>
);
};

export default InfoCard;
