import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllUser } from '../../api/UserRequest';
import { Followers } from '../../data/followersData';
import User from '../User/User';
import './FollowersCard.css';

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log('Followers Card', data);
    };
    fetchPersons();
  }, []);
  
  return (
    <div className='followersCard'>
      <h3 className='followersCard__heading'>People you may know</h3>
      {Followers.map((person, id) => {
        return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
