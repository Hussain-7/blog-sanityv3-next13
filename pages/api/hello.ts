// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // https://jsonplaceholder.typicode.com/todos/1
  // fetch data from a remote endpoint
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  console.log(json);
  res.status(200).json({ data: json });
}
