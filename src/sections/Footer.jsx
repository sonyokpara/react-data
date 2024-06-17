import { SocialMediaLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-12 py-3 bg-black">
      <div className="flex max-sm:flex-col items-center gap-8 lg:gap-12">
        <div className="flex flex-col items-start w-full">
          <a
            href="/"
            className="text-primary font-montserrat font-bold text-xl py-5"
          >
            REACT.
          </a>
          <p className="text-sm text-slate-100 font-inter leading-normal max-w-[350px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            officia, facere iure ab cum corrupti doloribus accusantium quisquam
            blanditiis labore, rerum dolores quae error ut saepe eos delectus
            eaque quibusdam!
          </p>
          <div className="w-full flex justify-start items-center gap-4 mt-10 mb-5">
            {SocialMediaLinks.map((Link, index) => (
              <div className="flex justify-center items-center bg-white rounded-full w-10 h-10">
                <a href="/">
                  {<Link key={index} className="w-8 h-8 text-black" />}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-between items-center"></div>
      </div>
    </footer>
  );
};

export default Footer;
