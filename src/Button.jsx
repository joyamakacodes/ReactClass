import React from 'react'

const Button = ({children}) => {
  return (
    <button style={{backgroundColor: 'red', color: 'white', padding: '5px 10px'}}>
      {children}
    </button>
  )
}

export default Button
