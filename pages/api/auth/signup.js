import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(request, answer) {
  if (request.method === "POST") {
    const hash = await bcrypt.hash(request.body.password, 10);
    request.body.password = hash;

    let db = (await connectDB).db("workOutDB");
    await db.collection("user_cred").insertOne(request.body);
    answer.status(200).json("회원가입 완료하였습니다.");
  }
}
