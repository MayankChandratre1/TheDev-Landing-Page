
const NavBar = () => {
  return (
    <div className='bg-pr-blue  px-5 py-3 flex justify-between items-center text-white fixed top-0 w-full z-10'>
        <div className='font-bold text-2xl'>TheDev</div>
        <ul className='flex gap-5'>
            <li className='hover:underline'><a href="#about">About</a></li>
            <li className='hover:underline'><a href="#courses">Courses</a></li>
            <li className='hover:underline'><a href="#footer">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar