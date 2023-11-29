import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/util/database";

export default async function handler(request, answer) {
  let session = await getServerSession(request, answer, authOptions);

  if (session) {
    request.body.author = session.user.email;
  }
  if (request.method == "POST") {
    if (request.body.title == "") {
      return answer.status(500).json("제목써라");
    }
    let db = (await connectDB).db("workOutDB");
    let result = db.collection("post").insertOne(request.body);
    answer.redirect(302, "/list");
  }
}
