import PricingCard from "../components/PricingCard";
import { packages } from "../constants";

const Pricing = () => {
  return (
    <section className="">
      <div className="flex justify-center gap-8 flex-wrap w-full bg-white py-10">
        {packages.map((pack, index) => (
          <PricingCard key={index} {...pack} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
