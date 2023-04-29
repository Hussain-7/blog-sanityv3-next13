import Image from "next/image";
import Link from "next/link";
import React from "react";
import urlFor from "../../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <li className="ml-10 py-5 list-disc space-y-5">{children}</li>;
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg list-decimal">{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-5xl py-10 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-4xl py-10 font-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl py-10  font-bold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-2xl py-10  font-bold">{children}</h4>;
    },
    h5: ({ children }: any) => {
      return <h5 className="text-xl py-10  font-bold">{children}</h5>;
    },
    bloquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-4 border-[#f7ab0a] pl-5 py-5 my-5">
          {children}
        </blockquote>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noopener noreferrer" : "";
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f7ab0a] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
