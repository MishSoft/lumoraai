"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gray-50 p-8 md:p-16">
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Your Newsletter Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage your personalized newsletter preferences
          </p>
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Current Preferences */}
          <section className="bg-gray-100 rounded-xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Current Preferences
              </h2>
              <p className="text-gray-600 mb-6">No preferences set yet</p>
              <Link
                href="/select"
                className="inline-block text-[#F93493] font-semibold hover:underline"
              >
                Set Up Newsletter &rarr;
              </Link>
            </div>
          </section>

          {/* Actions */}
          <section className="bg-gray-100 rounded-xl p-6 flex flex-col justify-center shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Actions
            </h2>
            <div className="flex items-center justify-start">
              <Button
                onClick={() => router.push("/select")}
                variant="outline"
                className="flex items-center gap-2"
              >
                <SquarePen className="w-5 h-5" />
                Update Preferences
              </Button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
