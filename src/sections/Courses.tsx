import course1 from "../assets/course1.webp"
import course2 from "../assets/course2.webp"
import course3 from "../assets/course3.webp"
import CourseCard from '../components/CourseCard'

const Courses = () => {
  return (
   <section className='h-screen p-4 bg-gradient-to-tr from-pr-blue to-sc-blue text-white flex flex-col justify-center' id="courses">
      <div>
        <h3 className='text-4xl font-semibold text-center mb-10'>Popular Courses</h3>
      </div>
      <div className='flex items-center justify-evenly pt-5'>
        <CourseCard image={course1} title="Full Stack Web Development" price={300} desc={"Master front-end and back-end technologies to build dynamic, responsive web applications."} />
        <CourseCard image={course2} title="Full Stack Java Development" price={300} desc={"Learn Java fundamentals and advanced techniques to create robust, scalable applications and software solutions."} />
        <CourseCard image={course3} title="Full Stack Python Development" price={300} desc={"Dive into Python programming for data analysis, web development, and automation with hands-on projects."} />
      </div>
   </section>
  )
}

export default Courses