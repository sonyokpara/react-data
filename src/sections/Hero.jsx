import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="uppercase text-primary/75 text-sm font-inter tracking-wider mb-4">
        growing with data analytics
      </div>
      <h1 className="text-white mb-2 md:mb-4 text-4xl sm:text-5xl md:text-6xl font-semibold font-montserrat">
        Grow with data.
      </h1>
      <div className="flex justify-center items-center gap-2 text-white/95">
        <p className="md:text-2xl sm:text-xl text-base font-normal">
          Fast flexible financing
        </p>
        <ReactTyped
          className="md:text-xl text-base font-normal"
          strings={["BTB", "BTC", "SASS"]}
          typeSpeed={80}
          backSpeed={100}
          loop
        />
      </div>

      <div className="mt-6">
        <p className="text-white/55 font-inter max-lg:mx-auto max-lg:max-w-96 lg:max-w-lg text-center">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
      </div>
      <div className="mt-10">
        <button className="outline-none focus:outline-none rounded-full px-6 py-2.5 font-semibold bg-primary text-black/75 font-inter">
          Get Started!
        </button>
      </div>
    </section>
  );
};

export default Hero;
