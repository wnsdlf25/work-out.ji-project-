import { connectDB } from "@/util/database.js";
// import Link from "next/link";
import ListItem from "./ListItem";

export default async function List() {
  let db = (await connectDB).db("workOutDB");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
