

const Stat = ({stat, message}:{stat:number | string, message:string}) => {
  return (
    <div className='grid place-items-center'>
        <p className='text-5xl mb-2 font-bold'>{stat}+</p>
        <p className='font-semibold text-lg'>{message}</p>
    </div>
  )
}

export default Stat