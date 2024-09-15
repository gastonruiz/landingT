import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo2.png";
import { navItems } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const menuRef = useRef(null);

  // Maneja el clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMenuItemClick = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logtype" />
            <NavLink to={"/"} className="text-xl tracking-tight">
              TipoArche
            </NavLink>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="/material"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Material gratuito
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            ref={menuRef}
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <NavLink
                    to={item.href}
                    onClick={handleMenuItemClick}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="py-4">
              <Link
                to="/material"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                onClick={handleMenuItemClick}
              >
                Material gratuito
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
