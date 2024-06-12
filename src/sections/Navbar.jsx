import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 w-full">
      <div className="flex justify-between items-center py-6 px-12">
        <div className="w-full text-3xl font-bold font-open-sans text-[#00df9a]">
          REACT.
        </div>

        {/* main navigation links */}
        <nav>
          <ul className="flex justify-center items-center space-x-12">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a
                  className="font-normal font-montserrat text-lg hover:text-[#00df9a] transition-all duration-300"
                  href={navLink.href}
                >
                  {navLink.link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* buttons */}
        <div className="flex justify-start items-center gap-6"></div>
      </div>
    </header>
  );
};

export default Navbar;
