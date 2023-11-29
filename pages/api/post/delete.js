import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
  if (request.method == "DELETE") {
    let session = await getServerSession(request, answer, authOptions);

    const db = (await connectDB).db("workOutDB");
    let find = await db
      .collection("post")
      .findOne({ _id: new ObjectId(request.body) });

    if (find.author == session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(request.body) });
      return answer.status(200).json("삭제완료");
    } else {
      return answer.status(500).json("현재유저와 작성자 불일치");
    }
  }
}
