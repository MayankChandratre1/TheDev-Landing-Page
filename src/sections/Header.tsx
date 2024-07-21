import NavBar from "../components/NavBar"
import aboutimage from "../assets/about1.png"
import Button from "../components/Button"

const Header = () => {
  return (
    <section id="header">
        <NavBar />
        <div className="mt-14 h-[95vh] bg-gradient-to-tr from-pr-blue to-sc-blue grid grid-cols-3">
            <div className="p-5 flex flex-col justify-center items-start col-span-2">
                <div className="mb-5">
                    <h1 className="text-7xl font-bold text-white drop-shadow-sm">TheDev</h1>
                    <p className="mt-2 ml-2 text-sc-orange italic text-xl">The beautiful thing about learning is that no one can take it away from you.</p>
                </div>
                <Button onClick={()=>{
                    window.location.href = "#courses"
                }}>Explore Courses</Button>
            </div>
            <div className="grid place-items-center">
                <img src={aboutimage} alt="computer" className="w-[90%] drop-shadow-2xl"/>
            </div>
        </div>
    </section>
  )
}

export default Header