import Logo from '../../img/logo.png';
import './Auth.css';

const Auth = () => {
  return (
    <div className='authPage'>
      <div className='authPageLeft'>
        <img className='authPageLeft__logo' src={Logo} alt='' />
        <div className='authPageLeft__appdetails'>
          <h1 className='authPageLeft__appdetails--name'>Friendsbook</h1>
          <h5 className='authPageLeft__appdetails--slogan'>
            Connect throughout the world
          </h5>
        </div>
      </div>
      <div className='authPageRight'>
        {/* <SignUp /> */}
        <LogIn />
      </div>
    </div>
  );
};

function LogIn() {
  return (
    <div className='authPage__right'>
      <form className='infoForm authForm'>
        <h2>Log In</h2>

        <div>
          <input
            type='text'
            placeholder='Username'
            className='infoInput'
            name='username'
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Password'
            className='infoInput'
            name='password'
          />
        </div>

        <div>
          <span style={{ fontSize: '14px' }}>
            Don't have an Account? SignUp!
          </span>
        </div>

        <button className='btn btn--info' type='submit'>
          LogIn
        </button>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className='authPage__right'>
      <form className='infoForm authForm'>
        <h2>Sign Up</h2>
        <div>
          <input
            type='text'
            placeholder='First Name'
            className='infoInput'
            name='firstname'
          />

          <input
            type='text'
            placeholder='Last Name'
            className='infoInput'
            name='lastname'
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Username'
            className='infoInput'
            name='username'
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Password'
            className='infoInput'
            name='password'
          />

          <input
            type='text'
            placeholder='Confirm Password'
            className='infoInput'
            name='confirmpassword'
          />
        </div>

        <div>
          <span style={{ fontSize: '14px' }}>
            Already have an account? Login!
          </span>
        </div>

        <button className='btn btn--info' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
