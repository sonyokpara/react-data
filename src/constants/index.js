import { FaCompass, FaUnity, FaBuffer } from "react-icons/fa6";

// nav links
export const navLinks = [
  { link: "Home", href: "#home" },
  { link: "Company", href: "#company" },
  { link: "About", href: "#about" },
  { link: "Resources", href: "#resources" },
  { link: "Contact", href: "#contact" },
];

export const packages = [
  {
    icon: FaCompass,
    title: "Starter",
    price: 149,
    features: ["500GB Storage", "1 User Allowed", "Send up to 2GB"],
    selected: false,
  },
  {
    icon: FaUnity,
    title: "Partnership",
    price: 199,
    features: ["1TB Storage", "3 Users Allowed", "Send up to 10GB"],
    selected: true,
  },
  {
    icon: FaBuffer,
    title: "Business",
    price: 299,
    features: ["5TB Storage", "10 Users Allowed", "Send up to 20GB"],
    selected: false,
  },
];
