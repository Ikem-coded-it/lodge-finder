import { CiHome, CiUser } from "react-icons/ci";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { IoHelpCircleOutline } from "react-icons/io5";

export const caretakerLinks = [
    {href: "/dashboard/vacancies", text: "Dashboard", icon: <RxDashboard size="20px" />},
    {href: "/dashboard/new-vacancy", text: "New vacancy", icon: <GoPlus size="20px" />},
    {href: "/dashboard/profile", text: "Profile", icon: <CiUser size="20px" />},
    {href: "/contact-us", text: "Contact us", icon: <RiContactsLine size="20px" />},
    {href: "/", text: "Home", icon: <CiHome size="20px" />},
]