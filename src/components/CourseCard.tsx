
import Button from './Button'

const CourseCard = ({image, title, price, desc}:{
    image:any,
    title:string,
    price:number,
    desc:string
}) => {
  return (
    <div className="min-h-[450px] w-72 overflow-hidden flex flex-col rounded-xl shadow-xl">
        <img src={image} alt="course" className="w-[100%] flex-1" />
        <div className="p-4 bg-pr-orange flex flex-col gap-3 justify-end object-cover">
            <div className="text-sc-orange">
                <h5 className="text-2xl font-bold">{title}</h5>
                <p>${price}</p>
            </div>
            <p>{desc}</p>
            <Button>Buy Now</Button>
        </div>
    </div>
  )
}

export default CourseCard