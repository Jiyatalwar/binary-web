import Customer from "./components/Costumer";
import Solutions from "./components/Solutions";
import Whyus from "./components/Whyus";

const Page = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-32 py-12 md:py-20">
      <Solutions />
      <Whyus />
      <Customer />
    </div>
  );
};

export default Page;