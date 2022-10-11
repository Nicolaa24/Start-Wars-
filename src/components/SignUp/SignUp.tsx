import React from 'react'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { setUser } from '../../redux/slices/UserSlice';
import { Form } from '../Form/Form';
import { IUser } from '../../utils/firebase/firebase';
import img from '../../assets/images/register/register.jpg'
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {

  const [isSingUp, setIsSingUp] = React.useState(false);

  const {isLogined} = useAppSelector(state => state.user)

 
  const navigate = useNavigate()

   if (isLogined) {
    navigate('/categories')
  }
    
  const dispatch = useAppDispatch();

  const handleRegister = (user: IUser) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          nickName: user.displayName,
          token: user.refreshToken
        }));
        setIsSingUp(!isSingUp)
      })
      .catch(console.error)
  }


  const handleLogin = (user: IUser) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          nickName: user.displayName,
          token: user.refreshToken,
          isLogined: true
        }));
      })
      .catch(console.error)
  }

  return (
    <div className='h-screen w-screen flex mt-[30px]'>
      <div className='w-[60%]'>
         <img className='h-[70%] w-full object-fill ' src={ img} />
      </div>
     
      <div className='w-[40%] mx-7'>
        {isSingUp && (
        <Form
          title='Register'
          handleOnClick={handleRegister}
        />
      )}
     
      {!isSingUp &&
        <Form
        title='Login'
        handleOnClick={handleLogin}
        />
      }
      <button className='flex bg-black text-gray-400 w-full items-center text-center justify-center rounded-lg '
        onClick={() => setIsSingUp(!isSingUp)}>
        {isSingUp ? 'Already have account' : ' Sign up'}
      </button>
      </div>
      
    </div>
  )
};
