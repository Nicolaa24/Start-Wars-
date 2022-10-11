import React from 'react'
import { Navigate } from 'react-router-dom';
import { IUser } from '../../utils/firebase/firebase';

interface Props {
  title: string;
  handleOnClick: (user:IUser) => void;
}

const DEFAULT_USER = {
  nickname: '',
  email: '',
  password: '',
}

export const Form: React.FC<Props> = ({ title, handleOnClick }) => {

  const [newUser, setNewUser] = React.useState(DEFAULT_USER);

  const registerNewUser = () => {
    const user = { nickname: newUser.nickname, email: newUser.email, password: newUser.password }
    setNewUser(user);
    handleOnClick(user);
  }

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })

  }

  return (
    <div className='flex flex-col mt-8'>
      <div>
        <h1 className='text-2xl mb-3'>{title}</h1>
      </div>
      <div>
        <input
          id='nickname'
          name='nickname'
          className='py-3 px-2 mb-3 rounded-lg text-black w-full'
          type='text'
          value={newUser.nickname}
          onChange={getInputValue}
          placeholder='Enter your NickName'
        />
      </div>
      <div>
        <input
          id='email'
          name='email'
          className='py-3 px-2 mb-3 rounded-lg text-black w-full'
          type='email'
          value={newUser.email}
          onChange={getInputValue}
          placeholder='Enter your Email'
        />
      </div>
      <div>
        <input
          id='password'
          name='password'
          className='py-3 px-2 mb-3 rounded-lg text-black w-full'
          type='password'
          value={newUser.password}
          onChange={getInputValue}
          placeholder='Enter your Password'
        />
      </div>
      <button
        className='py-1 px-2 mb-3 bg-yellow-300 rounded-lg w-full  '
        onClick={registerNewUser}
      >
        {title}
      </button>
    </div>
  )
};
