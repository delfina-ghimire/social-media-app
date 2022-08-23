const User = ({ person }) => {
  return (
    <div>
      <div className='followersCard__follower'>
        <div className='follower__container'>
          <img src={person.img} alt='' className='follower__img' />
          <div className='follower__details'>
            <span className='follower__name'>{person.name}</span>
            <span className='follower__username'>@{person.username}</span>
          </div>
        </div>
        <button className='btn btn--follow'>Follow</button>
      </div>
    </div>
  );
};

export default User;
