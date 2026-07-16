import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Solutions from "./components/Solutions"
import Whyus from "./components/Whyus"

const page = () => {
  return (
  <div>
    <div>
      <Navbar/>
      <Solutions/>
      <Whyus/>
      <Footer/>
   
    </div>
  </div>
  )
}

export default page
