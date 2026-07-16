import Navbar from "./components/Navbar"
import Solutions from "./components/Solutions"

const page = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('background-img/19366.jpg')" }} // <-- Replace with your image path or URL
    >
      <Navbar />
      <Solutions />
      
    </div>
  )
}

export default page