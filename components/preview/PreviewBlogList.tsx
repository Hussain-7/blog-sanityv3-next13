"use client";
import { usePreview } from "../../lib/sanity.preview";
import BlogList from "../blogs/BlogList";
type Props = {
  query: string;
};
const PreviewBlogList = ({ query }: Props) => {
  const posts = usePreview(null, query);
  console.log("posts", posts);
  return <BlogList posts={posts} />;
};

export default PreviewBlogList;
