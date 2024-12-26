import { socialLinks } from "@/utils/sociallinks";
import Link from "next/link";

export default function Social() {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-7">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold border-b dark:border-b-gray-500 border-gray-500 group"
          >
            <link.icon
              className="flex-shrink-0 h-7 w-7 text-gray-700 group-hover:dark:text-white group-hover:text-gray-900 duration-300"
              aria-hidden="true"
            />
            {""}&nbsp;
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
