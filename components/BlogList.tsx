import React from "react";
type Props = {
  posts: Post[];
};
const BlogList = ({ posts }: Props) => {
  console.log("posts", posts.length);
  return <div>BlogList</div>;
};

export default BlogList;
