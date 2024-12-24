import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import UnmountStudio from "./Unmount";
import { DarkModeToggle } from "./DarkmodeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];

  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-gray-800 border-gray-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} width={35} height={35} alt="logo" />
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-montserrat dark:text-white text-gray-600 dark:hover:text-primary-color hover:text-gray-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <DarkModeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
