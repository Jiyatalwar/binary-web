import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Solutions from "./components/Solutions"

const page = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }} // <-- Replace with your image path or URL
    >
      <Navbar />
      <Solutions />
      <Footer /> {/* Added Footer since it was imported but missing in return */}
    </div>
  )
}

export default page