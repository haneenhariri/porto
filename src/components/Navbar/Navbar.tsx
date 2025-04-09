import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navLinks";
import NavSidebar from "./NavSidebar";
import { useSidebar } from "../../hooks/useSidebar";

const Navbar: React.FC = () => {
  const { isOpen, toggle, close } = useSidebar();

  return (
    <>
      <nav className="flex justify-between items-center border-b border-b-border relative z-50">
        <div className="main-nav-content flex items-center">
          <h2 className="text-link py-4 px-6 font-[450] mr-4 lg:mr-32">
            haneen al-hariri
          </h2>

          <div className="hidden md:flex items-center justify-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `text-link py-4 px-6 font-[450] border-x border-border ${
                    isActive
                      ? "border-b-[3px] border-b-link-active text-link-white"
                      : ""
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="md:hidden mr-4">
          {isOpen ? (
            <X
              size={28}
              className="text-link cursor-pointer"
              onClick={toggle}
            />
          ) : (
            <Menu
              size={28}
              className="text-link cursor-pointer"
              onClick={toggle}
            />
          )}
        </div>

        <NavLink
          to="contact-me"
          className={({ isActive }) =>
            `hidden md:block text-link py-4 px-6 font-[450] border-x border-border ${
              isActive ? "border-b-[3px] border-b-link-active" : ""
            }`
          }
        >
          _contact-me
        </NavLink>
      </nav>

      {isOpen && <NavSidebar closeSidebar={close} />}
    </>
  );
};

export default Navbar;
