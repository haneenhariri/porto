import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import NavSidebar from "./NavSidebar";
import { useSidebar } from "../../hooks/useSidebar";
import { TbMenu3 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const { isOpen, toggle, close } = useSidebar();

  return (
    <>
      <nav className="flex justify-between items-center border-b border-b-border relative z-50">
        <div className="main-nav-content flex items-center">
          <h2 className="text-link py-4 px-6 font-[450]  lg:mr-32">
            haneen al-hariri
          </h2>

          <div className="hidden lg:flex items-center justify-center">
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

        <div className="lg:hidden mr-4">
          {isOpen ? (
            <IoClose
              className="text-link cursor-pointer text-3xl"
              onClick={toggle}
            />
          ) : (
            <TbMenu3 onClick={toggle} className="text-link cursor-pointer text-3xl" />
          )}
        </div>

        <NavLink
          to="contact-me"
          className={({ isActive }) =>
            `hidden lg:block text-link py-4 px-6 font-[450] border-l border-border ${
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
