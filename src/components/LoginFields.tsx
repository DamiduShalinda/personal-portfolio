import React, { useState } from 'react';

type userDetails = {
  username: string,
  password: string
}

type LoginProps = {
  onSubmit: (data : userDetails) => void;
};

const LoginFields: React.FC<LoginProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    onSubmit(data);
  };

  return (
    <div className='justify-center items-center w-screen h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[1000px] justify-center items-center gap-4'>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className='bg-transparent border-b-2 border-slate-100'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className='bg-transparent border-b-2 border-slate-100'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginFields;
