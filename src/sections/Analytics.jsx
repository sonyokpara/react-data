import illustration from "../assets/icons/undraw_data.svg";
import Button from "../components/Button";

const Analytics = () => {
  return (
    <section className="bg-white py-12 mb-5 flex max-sm:flex-col flex-wrap justify-center items-center w-full">
      <div className="flex justify-center pt-10 items-center flex-1 max-sm:w-full">
        <img src={illustration} alt="illustration" width={300} />
      </div>
      <div className="flex-1 max-sm:w-full max-sm:text-center max-sm:mt-12 px-8">
        <h3 className="uppercase text-primary font-bold font-montserrat text-sm">
          Data Analytics Dashboard
        </h3>
        <h2 className="text-black/90 sm:text-2xl md:text-3xl text-lg font-montserrat my-2 font-bold">
          Manage Data Analytics Centrally
        </h2>
        <p className="text-black/80 leading-normal font-inter text-base break-words mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          consectetur sint vel earum ullam perspiciatis iusto esse repellat
          mollitia facere magnam harum velit, ipsum at dicta possimus autem,
          aperiam molestias?
        </p>
        <div className="mt-4">
          <Button
            label="Get Started"
            backgroundColor="bg-black"
            textColor="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Analytics;
