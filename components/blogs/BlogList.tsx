import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import urlFor from "../../lib/urlFor";
import BlogCard from "./BlogCard";
type Props = {
  posts: Post[];
};
const BlogList = ({ posts }: Props) => {
  console.log("posts", posts[0].mainImage);
  return (
    <div>
      <hr className="border-[#f7ab0a] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
