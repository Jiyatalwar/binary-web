import Contactus from "./components/Contactus"
import Customer from "./components/Costumer"
import Solutions from "./components/Solutions"
import Whyus from "./components/Whyus"
import States from "./components/States"


const page = () => {
  return (
  <div>
    <div>
      <Solutions/>
      <Whyus/>
      <Customer/>
      <Contactus/>
       <States/>

    </div>
  </div>
  )
}

export default page
