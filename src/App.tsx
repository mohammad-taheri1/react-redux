import React from 'react';

const App = () => {

  interface IUser {
    username: string
    email: string
    name: string
    age?: number
    website: string
    active: boolean
  }

  interface IUser {
    country: string
  }

  const user: IUser = {
    username: 'mamad.taheri',
    email: 'mamad@tmail.com',
    name: 'Mamad Taheri',
    country: 'Iran',
    age: 32,
    website: 'www.test.ir',
    active: true
  }

  return (
    <div>
      
    </div>
  );
};

export default App;