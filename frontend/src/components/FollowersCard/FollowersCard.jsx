import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllUser } from '../../api/UserRequest';
import User from '../User/User';
import './FollowersCard.css';

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className='followersCard'>
      <h3 className='followersCard__heading'>People you may know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
