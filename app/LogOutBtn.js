"use client";

import { signOut } from "next-auth/react";

export default function LogOutBtn() {
  return (
    <button
      className="logoutbtn"
      onClick={() => {
        signOut();
      }}
    >
      로그아웃
    </button>
  );
}
