"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/client";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(0);

  const supabase = createClient();

  const steps = [
    {
      key: "name",
      label: "Full Name",
      placeholder: "John Doe",
      type: "text",
      validate: (v: string) => v.trim().length > 2,
    },
    {
      key: "email",
      label: "Email",
      placeholder: "example@email.com",
      type: "email",
      validate: (v: string) => /\S+@\S+\.\S+/.test(v),
    },
    {
      key: "password",
      label: "Password",
      placeholder: "********",
      type: "password",
      validate: (v: string) => v.length >= 6,
    },
    {
      key: "confirmPassword",
      label: "Confirm Password",
      placeholder: "********",
      type: "password",
      validate: (v: string) => v === form.password && v.length >= 6,
    },
  ];

  const current = steps[step];

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!current.validate(form[current.key as keyof typeof form])) {
      alert(`Please enter a valid ${current.label}`);
      return;
    }

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      await handleAuth(); // ბოლო ნაბიჯზე Auth
    }
  };

  async function handleAuth() {
    const { email, password } = form; // ვიღებთ form-იდან
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    setMessage("Check your email for the confirmation link.");
  }

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleNext}
        className="w-[400px] max-w-[350px] md:max-w-[400px] p-10 border rounded-xl shadow-xl"
      >
        {message ? (
          <p className="text-center">{message}</p>
        ) : (
          <>
            <h2 className="text-[30px] font-semibold text-center text-[#191919] mb-10">
              Lumora<span className="text-[#F93493]">AI</span> Sign Up
            </h2>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label>{current.label}</Label>
                <Input
                  type={current.type}
                  placeholder={current.placeholder}
                  value={form[current.key as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [current.key]: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                className="cursor-pointer bg-[#F93493] duration-200 hover:bg-[#E12982]"
              >
                {step === steps.length - 1 ? "Submit" : "Next"}
              </Button>

              <span>
                Do you have an account?{" "}
                <Link href={"/signin"} className="text-[#F93493]">
                  Sign In
                </Link>
              </span>
            </div>
          </>
        )}
      </form>
    </section>
  );
}
