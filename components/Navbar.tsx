import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const navbarLinks = [
  { title: "Features", href: "#" },
  { title: "Testimonial", href: "#" },
  { title: "Solutions", href: "#" },
  { title: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-survaceTwo mx-5 my-5 lg:mx-10 rounded-xl">
      <div className="w-full h-[60px] flex items-center justify-between p-5 lg:px-16">
        <div className="font-extrabold text-xl">QMS</div>
        <div>
          <div className="hidden lg:block">
            <ul className="flex items-center justify-center gap-4">
              {navbarLinks.map((link) => (
                <li
                  key={link.title}
                  className={`${
                    link.title === "Features" ? "font-semibold" : ""
                  } text-lg text-black hover:text-[#303030] transition-colors`}
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={"/icons/menu.svg"}
                  alt="menu"
                  width={25}
                  height={25}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-[40px] w-[200px] flex flex-col gap-1">
                <DropdownMenuItem>
                  <Link href={"#"}>Features</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"#"}>Testimonial</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"#"}>Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"#"}>Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
