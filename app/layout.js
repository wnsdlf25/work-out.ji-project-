import Link from "next/link";
import "./globals.css";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body>
        <div className="navbar">
          <Link href="/">메인메뉴</Link>
          <Link href="/list">게시판</Link>
          <Link href="/write">게시글 작성</Link>
          <Link href="/register">회원가입</Link>
          {session ? (
            <span className="logstyle">
              {session.user.name} <LogOutBtn />
            </span>
          ) : (
            <LoginBtn></LoginBtn>
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
