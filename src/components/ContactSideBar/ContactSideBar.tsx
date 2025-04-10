import DropdownMenu from "../DropdownMenu/DropdownMenu"
import { contactsData, findMeData } from "../../data/contact" 

const ContactSideBar = () => {
  return (
    <div className="border-r border-border">
      <DropdownMenu title="contacts" content={contactsData}/>
      <DropdownMenu title="find-me-also-in" content={findMeData} />
    </div>
  )
}

export default ContactSideBar