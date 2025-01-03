import { PortableTextComponents } from "@portabletext/react";
import { BiLinkExternal, BiSolidQuoteRight } from "react-icons/bi";

import Link from "next/link";
import HashScroll from "./HashScroll";

export const CustomPortableText: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-2 mb-6">{children}</p>,
    h2: ({ children }) => (
      <h2
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="font-montserrat before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-gray-500 before:text-gray-400 relative font-bold tracking-tight dark:text-gray-100 lg:text-4xl text-3xl text-gray-700 my-8"
      >
        <HashScroll text={children} />
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="font-montserrat before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-gray-500 before:text-gray-400 relative block lg:font-bold font-semibold tracking-tight lg:text-3xl text-2xl dark:text-gray-100 text-gray-700 my-6"
      >
        <HashScroll text={children} />
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="font-montserrat before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-6 before:-left-4 lg:before:text-2xl before:text-xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-gray-500 before:text-gray-400 relative inline-block font-semibold tracking-tight text-xl dark:text-gray-100 text-gray-700 mb-2 mt-4"
      >
        <HashScroll text={children} />
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative overflow-hidden tracking-tight text-lg my-8 lg:py-6 lg:pl-6 pr-12 p-4 border dark:border-gray-800 border-gray-200 rounded-md">
        <BiSolidQuoteRight
          className="text-7xl absolute -top-7 -right-5 -rotate-12 dark:text-gray-800 text-gray-200"
          aria-hidden="true"
        />
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="font-montserrat font-medium italic">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-bold dark:text-gray-300 text-gray-700">
        {children}
      </strong>
    ),
    link: ({ children, value }) => {
      return (
        <Link
          href={value?.href}
          className="dark:text-blue-400 text-blue-500 hover:underline"
        >
          {children} <BiLinkExternal className="inline" aria-hidden="true" />
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="font-montserrat py-[0.15rem] px-1 rounded-sm font-medium dark:bg-colors-primary-bg bg-colors-secondary-bg dark:text-gray-200 text-pink-500">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-[square] mt-5 ml-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal mt-5 ml-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-4">{children}</li>,
    number: ({ children }) => <li className="mb-4">{children}</li>,
  },
};
