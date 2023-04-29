const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const HomePage = ({ props }: any) => {
  return <div></div>;
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
