import React from 'react';

const App = () => {

  // type declaration
  type TUser = {
    username: string
    email: string
    name: string
    age?: number
    website: string
    active: boolean
  }

  const user: TUser = {
    username: 'mamad_taheri',
    email: 'mamad@mail.com',
    name: 'Mamadddddd',
    // age: 32,
    website: 'irdevprogs.ir',
    active: true
  }

    // interface declaration
    interface IUser {
      username: string
      email: string
      name: string
      age?: number
      website: string
      active: boolean
    }

    // Extending an interface
    interface IWork {
      company: string
      position: string
    }

    interface IPerson extends IWork {
      name: string
      age: number
    }

    // Extending a type
    type TWork = {
      company: string
      position: string
    }

    type TPerson1 = TWork & {
      name: string
      age: number
    }

    // Extending an interface into a type
    type TPerson2 = IWork & {
      name: string
      age: number
    }

    class Person1 implements IWork {
      name: 'Mamad'
      age: 32
    }

    class Person2 implements TWork {
      name: 'Mamad'
      age: 32
    }





  return ( <div> App.tsx </div> );
};

export default App;