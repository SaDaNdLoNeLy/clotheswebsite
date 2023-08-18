"use client";

import { signOut } from "next-auth/react";

export default function ShopPage() {
  return (
    <div className="ms-auto h-10">
      this is main page everyone can see
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
