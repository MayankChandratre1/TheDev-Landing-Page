import Stat from "../components/Stat"


const About = () => {
  return (
    <section id="about" className="h-screen p-4 bg-gradient-to-tr from-pr-blue to-sc-blue text-white flex flex-col justify-center">
      <div>
        <h3 className="text-3xl font-semibold my-5">About The Dev</h3>
        <p className="text-lg pl-1 mb-2">Welcome to The Dev, your premier destination for mastering the art of programming. At The Dev, we are dedicated to transforming aspiring coders into proficient developers by offering a comprehensive range of courses tailored to all skill levels. Whether you're a beginner looking to learn the basics or a seasoned professional aiming to enhance your expertise, our meticulously designed curriculum, led by industry experts, ensures a hands-on learning experience that is both engaging and effective. Join our vibrant community of learners and embark on a journey to unlock your full potential in the ever-evolving world of technology. At The Dev, we don't just teach coding; we craft the future, one line of code at a time.</p>
      </div>
      <div className="w-full grid grid-cols-3 py-3 mt-10">
        <Stat stat={500} message="Complete courses"/>
        <Stat stat={"100k"} message="Active learners"/>
        <Stat stat={"100"} message="Well known Course crators"/>
      </div>
    </section>
  )
}

export default About