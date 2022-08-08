import { useState } from 'react';
import Logo from '../../img/logo.png';
import './Auth.css';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const [data, setData] = useState({
    firstname:"",
    lastname:"",
    username:"",
    password:"",
    confirmpassword:""
    })

    const[confirmPassword, setConfirmPassword] = useState(true);

    const handleChange=(e)=>{
      setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp){
         if( data.password !== data.confirmpassword) {
          setConfirmPassword(false);
         }
        }
    }
  
const resetForm=()=>{
  setConfirmPassword(true);
  setData({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmpassword: '',
  });
}


  return (
    <div className='authPage'>
      {/* Left Side */}
      <div className='authPageLeft'>
        <img className='authPageLeft__logo' src={Logo} alt='' />
        <div className='authPageLeft__appdetails'>
          <h1 className='authPageLeft__appdetails--name'>Friendsbook</h1>
          <h5 className='authPageLeft__appdetails--slogan'>
            Connect throughout the world
          </h5>
        </div>
      </div>

      {/* Right Side */}
      <div className='authPageRight'>
        <div className='authPage__right'>
          <form className='infoForm authForm' onSubmit={handleSubmit}>
            <h2>{isSignUp ? 'Sign Up' : 'Log in'}</h2>

            {isSignUp && (
              <div>
                <input
                  type='text'
                  placeholder='First Name'
                  className='infoInput'
                  name='firstname'
                  onChange={handleChange}
                  value = {data.firstname}
                />

                <input
                  type='text'
                  placeholder='Last Name'
                  className='infoInput'
                  name='lastname'
                  onChange={handleChange}
                  value={data.lastname}
                />
              </div>
            )}

            <div>
              <input
                type='text'
                placeholder='Username'
                className='infoInput'
                name='username'
                onChange={handleChange}
                value={data.username}
              />
            </div>
            <div>
              <input
                type='password'
                placeholder='Password'
                className='infoInput'
                name='password'
                onChange={handleChange}
                value={data.password}
              />

              {isSignUp && (
                <input
                  type='password'
                  placeholder='Confirm Password'
                  className='infoInput'
                  name='confirmpassword'
                  onChange={handleChange}
                  value={data.confirmpassword}
                />
              )}
            </div>

            <span
              style={{
                display: confirmPassword ? 'none' : 'block',
                color: 'red',
                fontSize: '14px',
                marginRight: '5px',
                alignSelf: 'flex-end',
              }}
            >
              * Error : Passwords do not Match!
            </span>

            <div>
              <span
                style={{
                  fontSize: '14px',
                  cursor: 'pointer',
                  borderBottom: '1px dotted',
                }}
                onClick={() => {
                  setIsSignUp((prev) => !prev);
                  resetForm();
                }}
              >
                {isSignUp
                  ? 'Already have an account. Login!'
                  : "Don't have an account? Sign Up!"}
              </span>
            </div>

            <button className='btn btn--info' type='submit'>
              {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
