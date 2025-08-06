import { Button } from "../ui/button";
import { Logo } from "./logo";
import { BsQrCodeScan } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-2 border-border w-full overflow-x-hidden px-4 fixed top-0 z-50 bg-primary-foreground">
      <Logo
        className="flex justify-center items-center py-2 gap-1"
        headClassName="w-10 h-10"
        textClassName="w-22 h-10"
      />
      <NavButton />
    </nav>
  );
}

function NavButton() {
  return (
    <div className="flex gap-2 text-sm font-semibold">
      <Button
        classname="bg-gray-300 text-primary flex gap-2 items-center"
        isOnNav={true}
      >
        <BsQrCodeScan className="text-xl" /> Get App
      </Button>
      <Button classname="bg-primary-red text-primary-foreground" isOnNav={true}>
        Log In
      </Button>
      <Button classname="text-xl" isOnNav={true}>
        <HiDotsHorizontal />
      </Button>
    </div>
  );
}
