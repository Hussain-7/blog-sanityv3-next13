const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const HomePage = () => {
  return (
    <div>
      <p className="text-2xl font-bold">Home Page</p>
      <p>Some text</p>
    </div>
  );
};

export default HomePage;
