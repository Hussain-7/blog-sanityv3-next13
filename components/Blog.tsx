import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import urlFor from "../lib/urlFor";
type Props = {
  post: Post;
};
const Blog = ({ post }: Props) => {
  return (
    <div>
      <div className="flex flex-col group cursor-pointer">
        <div
          className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 
	transition-transform duration-200 ease-out"
        >
          {" "}
          <Image
            className="object-cover object-left lg:object-center"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
          <div
            className="absolute bottom-0 w-full bg-opacity-20 
			bg-black backdrop-blur-lg rounded drop-shadow-lg 
			text-white p-5 flex justify-between"
          >
            <div>
              <p className="font-bold">{post.title}</p>
              <p>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
              {post.categories.map((category: Category) =>
                category?.title ? (
                  <div
                    className="bg-[#f7ab0a] text-center text-black px-3 
						py-1 rounded-full text-sm font-semibold"
                  >
                    {category?.title}
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 flex-1">
          <p className="underline text-lg font-bold">{post.title}</p>
          <p className="line-clamp-2 text-gray-500">{post.description}</p>
        </div>
        <p className="mt-5 font-bold flex items-center group-hover:underline">
          Read Post <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </p>
      </div>
    </div>
  );
};

export default Blog;
