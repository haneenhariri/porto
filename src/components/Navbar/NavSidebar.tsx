import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { NavSidebarProps } from "../../types/navbar";

const NavSidebar: React.FC<NavSidebarProps> = ({ closeSidebar }) => {
  return (
    <div
      className={`fixed top-4 left-4 right-4 bottom-4 rounded-lg bg-mainDiv border border-border z-40 flex flex-col items-start pt-[57px] transition-transform duration-300 ease-in-out`}
    >
      <h2 className="text-link pl-6 pt-6 pb-3 border-b border-border w-full">
        # navigate:
      </h2>
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          onClick={closeSidebar}
          className="text-link-white font-[450] pl-6 py-3 border-b border-border w-full"
        >
          {link.text}
        </NavLink>
      ))}
      <NavLink
        to="contact-me"
        onClick={closeSidebar}
        className="text-link-white font-[450] pl-6 py-3 border-b border-border w-full"
      >
        _contact-me
      </NavLink>
    </div>
  );
};

export default NavSidebar;
