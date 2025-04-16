import { FaFacebookF, FaInstagram, FaSchool, FaTelegramPlane, FaUniversity, FaWhatsapp } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaCss3, FaHtml5, FaJs, FaPhone, FaReact } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { RiFolder3Fill } from "react-icons/ri";
import { ContactSection, NestedDropdown } from "../types/contact";

//* _contact-me page sidebar data
export const contactsSidebarSections: ContactSection[] = [
  {
    title: "contacts",
    content: [
      {
        text: "user@gmail.com",
        icon: <FiMail />,
        to: "mailto:user@gmail.com",
      },
      {
        text: "+3598246359",
        icon: <FaPhone />,
        to: "tel:+3598246359",
      },
    ],
  },
  {
    title: "find-me-also-in",
    content: [
      {
        text: "Whatsapp",
        icon: <FaArrowUpRightFromSquare />,
        to: "https://wa.me/+963969646104",
      },
      {
        text: "Facebook",
        icon: <FaArrowUpRightFromSquare />,
        to: "",
      },
      {
        text: "Instagram",
        icon: <FaArrowUpRightFromSquare />,
        to: "",
      },
    ],
  },
];

//* _about-me page sidebar data
export const aboutMeSidebarSections: ContactSection[] = [
  {
    title: "personal-info",
    content: [
      {
        title: "bio",
        icon: <RiFolder3Fill className="text-[#FF637E]" />,
        content: [
          { text: "Facebook", icon: <FaFacebookF />, to: "#" },
          { text: "Instagram", icon: <FaInstagram />, to: "#" },
        ],
      },
      {
        title: "interests",
        icon: <RiFolder3Fill className="text-[#00D5BE]" />,
        content: [
          { text: "WhatsApp", icon: <FaWhatsapp />, to: "https://wa.me" },
          { text: "Telegram", icon: <FaTelegramPlane />, to: "#" },
        ],
      },
      {
        title: "education",
        icon: <RiFolder3Fill className="text-[#615FFF]" />,
        content: [
          { text: "high-school", icon: <FaSchool />, to: "https://wa.me" },
          { text: "university", icon: <FaUniversity />, to: "#" },
        ],
      },
    ] as NestedDropdown[],
  },
  {
    title: "contacts",
    content: [
      {
        text: "user@gmail.com",
        icon: <FiMail />,
        to: "mailto:user@gmail.com",
      },
      {
        text: "+3598246359",
        icon: <FaPhone />,
        to: "tel:+3598246359",
      },
    ],
  },
];
//* _projects page sidebar data
export const projectsSidebarSections: ContactSection[] = [
  {
    title: "projects",
    content: [
      {
        text: "React",
        icon: <FaReact />,
        onChange: () => console.log("React"),
      },
      {
        text: "HTML",
        icon: <FaHtml5 />,
        onChange: () => console.log("HTML"),
      },
      {
        text: "CSS",
        icon: <FaCss3 />,
        onChange: () => console.log("CSS"),
      },
      {
        text: "JavaScript",
        icon: <FaJs />,
        onChange: () => console.log("JS"),
      },
    ],
  },
];
