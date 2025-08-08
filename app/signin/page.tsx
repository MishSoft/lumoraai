"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { EyeClosed, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/client";
import { useRouter } from "next/navigation"; // ✅ ახალი router import

export default function SignInPage() {
  const [isShow, setIsShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const supabase = createClient();
  const router = useRouter(); // ✅ აქ ინიციალიზაცია

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const { email, password } = form;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Login successful! Redirecting...");
    setTimeout(() => {
      router.push("/dashboard"); // ✅ აქ redirect უკვე იმუშავებს
    }, 1000);
  }

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="w-[400px] max-w-[350px] md:max-w-[400px] p-10 border rounded-xl shadow-xl"
      >
        <h2 className="text-[30px] font-semibold text-center text-[#191919] mb-10">
          Lumora<span className="text-[#F93493]">AI</span> Login
        </h2>

        <div className="flex flex-col gap-5">
          {message && (
            <p
              className={`text-center text-sm ${
                message.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="flex items-end w-full">
            <div className="flex-col flex gap-2 flex-1">
              <Label>Password</Label>
              <Input
                type={isShow ? "text" : "password"}
                placeholder="**********"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            <Button
              type="button"
              onClick={() => setIsShow((prev) => !prev)}
              variant={"outline"}
            >
              {isShow ? <Eye /> : <EyeClosed />}
            </Button>
          </div>

          <Button
            type="submit"
            className="cursor-pointer bg-[#F93493] duration-200 hover:bg-[#E12982]"
          >
            Log In
          </Button>

          <span>
            Don&apos;t have an account?{" "}
            <Link href={"/signup"} className="text-[#F93493]">
              Sign Up
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
}
