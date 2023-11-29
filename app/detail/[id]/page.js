import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
import Comment from "./Comment.js";

export default async function Detail(props) {
  let db = (await connectDB).db("workOutDB");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={result._id.toString()} />
    </div>
  );
}
