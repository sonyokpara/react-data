import { navLinks } from "../constants";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 w-full">
      <div className="flex justify-between items-center py-6 px-12">
        <div className="w-full text-3xl font-bold font-open-sans text-primary">
          REACT.
        </div>

        {/* main navigation links */}
        <nav>
          <ul className="flex justify-center items-center space-x-12">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a
                  className="font-normal font-montserrat text-lg hover:text-primary transition-all duration-300"
                  href={navLink.href}
                >
                  {navLink.link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* buttons */}
        <div className="flex justify-center items-center space-x-5 w-full">
          <Button label="Login" />
          <Button label="Sign Up" backgroundColor="bg-primary" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
