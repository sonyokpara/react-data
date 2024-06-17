import Button from "./Button";
import { FaCircleCheck } from "react-icons/fa6";

const PricingCard = (props) => {
  const Icon = props.icon;
  return (
    <div
      className={`flex flex-col justify-between gap-6 ${
        props.selected ? "bg-gray-100" : "bg-white"
      } border border-slate-200 rounded-xl p-5 shadow-md`}
    >
      <div className="w-[300px] flex flex-col items-center">
        <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full border border-gray-200">
          <Icon className="w-10 h-10 text-black" />
        </div>
        <h2 className="text-lg my-2 md:text-2xl font-montserrat font-semibold text-black">
          {props.title}
        </h2>
        <h3 className="text-2xl my-2 font-semibold text-black font-bond font-montserrat">
          ${props.price}
        </h3>
        <ul className="text-black/90 space-y-3">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCircleCheck className="w-4 h-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center p-3">
        <Button
          label="Order Now"
          backgroundColor="bg-primary"
          textColor="text-black"
        />
      </div>
    </div>
  );
};

export default PricingCard;
