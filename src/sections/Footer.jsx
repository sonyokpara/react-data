import { SocialMediaLinks, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-12 py-3">
      <div className="flex max-sm:flex-col items-center gap-8 lg:gap-12">
        <div className="w-1/3 flex flex-col items-start max-sm:w-full">
          <a
            href="/"
            className="text-primary font-montserrat font-bold text-xl py-5"
          >
            REACT.
          </a>
          <p className="text-sm text-slate-100 font-inter leading-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            officia, facere iure ab cum corrupti doloribus accusantium quisquam
            blanditiis labore, rerum dolores quae error ut saepe eos delectus
            eaque quibusdam!
          </p>
          <div className="w-full flex justify-start items-center gap-4 mt-10 mb-5">
            {SocialMediaLinks.map((Link, index) => (
              <div className="flex justify-center items-center bg-white rounded-full w-8 h-8">
                <a href="/">
                  {
                    <Link
                      key={index}
                      className="w-6 h-6 text-black hover:text-primary"
                    />
                  }
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-start items-start gap-16 max-sm:gap-12 sm:pl-20">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-lg font-bold font-montserrat text-white leading-normal">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="mt-3 cursor-pointer text-white-400 text-base font-montserrat leading-normal hover:text-primary"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white/95 text-sm font-montserrat mt-5">
        Copyright &copy;2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
