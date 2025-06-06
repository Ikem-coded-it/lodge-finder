import { CiHome, CiUser } from "react-icons/ci";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { ImCoinDollar } from "react-icons/im";

export const caretakerLinks = [
    {
        href: "/dashboard/vacancies",
        text: "My vacancies",
        icon: <RxDashboard size="20px" />
    },
    {
        href: "/dashboard/vacancies/create",
        text: "New vacancy",
        icon: <GoPlus size="20px" />
    },
    {
        href: "/dashboard/profile",
        text: "Profile",
        icon: <CiUser size="20px" />
    },
    {
        href: "/dashboard/packages",
        text: "Packages",
        icon: <ImCoinDollar size="20px" />
    },
    {
        href: "/",
        text: "Home",
        icon: <FaHouseChimneyUser size="20px" />
    },
]
