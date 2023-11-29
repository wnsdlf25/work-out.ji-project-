import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
  if (request.method == "POST") {
    let change = { title: request.body.title, content: request.body.content };
    const db = (await connectDB).db("workOutDB");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: change });
    answer.redirect(302, "/list");
  }
}
