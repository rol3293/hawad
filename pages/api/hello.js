// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import {get} from "@vercel/edge-config";

export default async function handler(req, res) {
  const greeting = await get("about")
  res.status(200).json({ name: greeting })
}
