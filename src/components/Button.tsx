import React from 'react'

const Button = ({children, onClick}:{children: React.ReactNode, onClick?: ()=>void}) => {
  return (
    <button 
      className='p-2 bg-gradient-to-tr from-pr-orange to-sc-orange rounded-md text-white font-semibold shadow-lg cursor-pointer'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button