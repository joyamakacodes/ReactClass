import React from 'react';
import { createContext, useState, useContext } from 'react';

export const GlobalContext = createContext()
export const ContextHandler = ({children}) => {
  const [user, setUser] = useState('')
  const [dog, setDog] = useState({
    name: 'Lucky',
    gender: 'male'
  })
  console.log(user)
  return (
    <GlobalContext.Provider value={{
      user, setUser,
      dog, setDog,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
export const UserContext = () => useContext(GlobalContext);
