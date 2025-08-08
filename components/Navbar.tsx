"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Loading from "./Loading";

export default function Navbar() {
  const { user, signOut, loading } = useAuth();
  const router = useRouter();

  const handleLogOut = async () => {
    await signOut();
    router.push("/signin");
    if (loading) console.log("Loading..");
  };

  // ლოდინის UI
  if (loading) {
    return <Loading />;
  }

  // თუ მომხმარებელი არ არის, არაფერი არ ჩანს
  if (!user) {
    return null;
  }

  return (
    <header className="flex items-center justify-between p-2 shadow-sm">
      <h1 className="text-[25px] font-semibold">
        Lumora<span className="text-[#F93493]">Ai</span>
      </h1>

      <div className="flex items-center gap-2">
        <h2>{user.email}</h2>
        <Button onClick={handleLogOut}>Log out</Button>
      </div>
    </header>
  );
}
