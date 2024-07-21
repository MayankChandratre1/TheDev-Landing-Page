import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='min-h-52 p-4 bg-gradient-to-tr from-pr-orange to-sc-orange text-white grid grid-cols-3'>
      <div>
        <p className='font-bold'>&copy;TheDev</p>
        <p className='text-sm'>Since 2012</p>
      </div>
      <div>
        <p className='font-bold'>Go To</p>
        <ul className='mt-2'>
          <li className='hover:underline'><a href="#header">Top</a></li>
          <li className='hover:underline'><a href="#about">About</a></li>
          <li className='hover:underline'><a href="#courses">Courses</a></li>
        </ul>
      </div>
      <div className='font-bold text-2xl'>
        Contact us
        <ul className='font-normal text-lg'>
          <li>Mail: support@theDev.com</li>
          <li>Address: 102, Main road, near Central Park, Latur - 413512</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer