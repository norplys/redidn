import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";
import { TbChartBarPopular } from "react-icons/tb";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { Divider } from "../ui/divider";

const defaultSidebarLinks = [
  { href: "#", label: "Home", icon: <RiHomeLine /> },
  { href: "#", label: "Popular", icon: <TbChartBarPopular /> },
  { href: "#", label: "Answers", icon: <MdOutlineQuestionAnswer /> },
];

export function Sidebar() {
  return (
    <div className="mt-14 w-3xs h-screen text-primary border-r-2 border-border px-6 py-4 fixed top-0 left-0 text-sm">
      <div className="border rounded-full border-gray-600 absolute top-5 -right-4 text-xl bg-white z-50 p-1">
        <IoIosMenu />
      </div>
      <ul className="space-y-2 text-black">
        {defaultSidebarLinks.map((link) => (
          <li key={link.label}>
            <NavButton
              link={link.href}
              icon={link.icon}
              label={link.label}
              className="hover:bg-gray-50"
            />
          </li>
        ))}
      </ul>
      <Divider />
    </div>
  );
}

type NavButtonProps = {
  className?: string;
  link: string;
  icon: React.ReactNode;
  label: string;
};

export function NavButton({ className, link, icon, label }: NavButtonProps) {
  return (
    <Link
      href={link}
      className={`flex items-center gap-2 p-2 rounded ${className}`}
    >
      <div className="text-lg">
      {icon}
      </div>
      <span>{label}</span>
    </Link>
  );
}
