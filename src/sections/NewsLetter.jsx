import Button from "../components/Button";

const NewsLetter = () => {
  return (
    <section className="max-md:text-center">
      <div className="bg-black px-24 py-16 flex justify-between items-center max-lg:flex-col">
        <div className="w-full md:w-2/3 flex flex-col">
          <h3 className="font-montserrat font-bold text-2xl max-md:text-center md:text-3xl">
            Want tips & tricks to optimize your workflow?
          </h3>
          <p className="font-inter text-base text-slate-200 max-md:text-center leading-10">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>

        <div className="w-full lg:max-w-[40%]">
          <div className="flex max-sm:flex-col items-center gap-5 sm:border sm:border-slate-300 rounded-full p-2.5">
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
          <p className="text-sm text-slate-200 font-inter mt-4">
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
