import Contactus from "./components/Contactus"
import Customer from "./components/Costumer"
import Solutions from "./components/Solutions"
import States from "./components/States"
import Whyus from "./components/Whyus"

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
