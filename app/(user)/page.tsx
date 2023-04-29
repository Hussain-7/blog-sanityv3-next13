import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/preview/PreviewSuspense";
import BlogList from "../../components/blogs/BlogList";
import PreviewBlogList from "../../components/preview/PreviewBlogList";
const query = groq`*[_type == "post"]{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

const HomePage = async ({ props }: any) => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading Preview Data..
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
};

export default HomePage;

// using getServerSideProps call /api/hello and pass data in props

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();
  console.log("data", data);
  return {
    props: {
      data,
    },
  };
}
