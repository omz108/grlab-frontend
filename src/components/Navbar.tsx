import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/grlabLogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-blue-600">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button onClick={() => { navigate('/') }} className="text-white text-xl font-bold">
              <img src={ logo } alt="grlab" className="h-10 w-auto sm:h-12 md:h-16" />
            </button>
            {/* <a href="/" className="flex items-center">
              
            </a> */}
          </div>
          <div className="hidden md:flex space-x-8">
            {menuOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => {
                    navigate(option.href)
                }}
                className="text-white hover:text-gray-200"
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          {menuOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              className="block px-4 py-2 text-white hover:bg-blue-500"
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
