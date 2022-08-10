import { UilSearch } from '@iconscout/react-unicons';
import Logo from '../../img/logo-mini.png';
import './LogoSearch.css';

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
      <img src={Logo} alt='' />
      <div className='search'>
        <input type='text' placeholder='#Explore' />
        <div className='s-icon'>
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
