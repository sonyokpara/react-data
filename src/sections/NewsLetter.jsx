import Button from "../components/Button";

const NewsLetter = () => {
  return (
    <section className="max-md:text-center">
      <div className="bg-black px-12 py-12 flex justify-between items-center max-lg:flex-col gap-10">
        <div className="w-full md:w-2/3 flex flex-col">
          <h3 className="font-montserrat font-bold text-xl max-md:text-center md:text-2xl md:pl-24">
            Want tips & tricks to optimize your workflow?
          </h3>
          <p className="font-inter text-base text-slate-200 max-md:text-center leading-10 md:pl-24">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="w-full lg:max-w-[40%] flex items-center max-sm:flex-col gap-5 sm:border sm:border-slate-300 rounded-full p-2.5">
          <input
            type="text"
            placeholder="subscribe@example.com"
            className="input bg-transparent"
          />
          <div className="flex items-center max-sm:justify-end max-sm:w-full">
            <Button
              label="Subscribe"
              backgroundColor="bg-primary"
              textColor="text-black"
              fullWidth
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end max-md:justify-center items-center max-md:mx-auto max-md:w-[90%] w-full pb-8 max-md:-mt-6">
        <p className="text-sm text-slate-200 font-inter md:mr-24 md:-mt-12">
          We care about the protection of your data. Read our{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
