import { navLinks } from "../constants";
import Button from "../components/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsFixed(true) : setIsFixed(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`w-full py-5 px-12 ${
        isFixed
          ? "sticky top-0 left-0 right-0 border-b border-gray-700 shadow-lg"
          : "relative"
      }`}
    >
      <nav className="flex justify-between items-center">
        <a
          href="/"
          className="text-xl md:text-2xl lg:text-3xl text-primary font-bold font-montserrat tracking-wide"
        >
          REACT.
        </a>

        <ul className="hidden md:flex items-center justify-center space-x-8 md:space-x-10 lg:space-x-12">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a
                className="font-montserrat font-semibold text-sm md:text-base hover:text-primary transition-all duration-300"
                href={navLink.href}
              >
                {navLink.link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex justify-end items-center gap-6">
          <Button label="Login" />
          <Button
            label="Sign Up"
            backgroundColor="bg-white font-semibold"
            textColor="text-stone-900"
          />
        </div>

        <div className="block md:hidden cursor-pointer">
          {isMenuOpen ? (
            <AiOutlineClose onClick={toggleMenu} className="w-6 h-6" />
          ) : (
            <AiOutlineMenu onClick={toggleMenu} className="w-6 h-6" />
          )}
        </div>
      </nav>

      <nav
        className={`md:hidden bg-black py-5 px-10 w-[300px] h-full border-r border-r-gray-950 min-h-screen ${
          isMenuOpen
            ? `fixed top-20 left-0 ease-in-out duration-500`
            : "fixed -left-[100%] top-20"
        }`}
      >
        <ul className="space-y-6 flex flex-col justify-start">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a
                className="font-montserrat font-semibold text-base hover:text-primary transition-all duration-300"
                href={navLink.href}
              >
                {navLink.link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-start items-center gap-4 py-10">
          <Button label="Login" />
          <Button
            label="Sign Up"
            backgroundColor="bg-white font-semibold"
            textColor="text-stone-900"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
