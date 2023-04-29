import React from "react";
type Props = {
  posts: Post[];
};
const BlogList = ({ posts }: Props) => {
  console.log("posts", posts);
  return <div>BlogList</div>;
};

export default BlogList;
