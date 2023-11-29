import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
  const db = (await connectDB).db("workOutDB");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(request.query.id) })
    .toArray();
  answer.status(200).json(result);
}
