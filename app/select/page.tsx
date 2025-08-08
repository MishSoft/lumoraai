/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: "technology",
    name: "Technology",
    description: "Explore the latest trends and innovations in technology.",
  },
  {
    id: "business",
    name: "Business",
    description: "Latest business news and market trends.",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    description: "Movies, music, TV shows, and pop culture.",
  },
  {
    id: "health",
    name: "Health",
    description: "Health tips, news, and wellness advice.",
  },
  {
    id: "science",
    name: "Science",
    description: "Discoveries and research in science.",
  },
  {
    id: "sports",
    name: "Sports",
    description: "Scores, news, and updates from the sports world.",
  },
  {
    id: "travel",
    name: "Travel",
    description: "Travel guides, tips, and destination highlights.",
  },
  {
    id: "politics",
    name: "Politics",
    description: "Political news and analyses.",
  },
  {
    id: "environment",
    name: "Environment",
    description: "News about nature and the environment.",
  },
];

const frequencyOptions = [
  {
    id: "daily",
    name: "Daily",
    description: "Every day",
  },
  {
    id: "weekly",
    name: "Weekly",
    description: "Every week",
  },
  {
    id: "biweekly",
    name: "Bi-weekly",
    description: "Twice a week",
  },
];

export default function SelectPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFrequency, setSelectedFrequency] = useState<string>("daily");
  const { user } = useAuth();
  const router = useRouter();

  function toggleCategory(categoryId: string) {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  }

  async function handleSavePreferences(e: FormEvent) {
    e.preventDefault();

    if (selectedCategories.length === 0) {
      alert("Please select at least one category");
      return;
    }

    if (!user) {
      alert("Please sign in to continue");
      return;
    }

    try {
      const response = await fetch("/api/user-preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categories: selectedCategories,
          frequency: selectedFrequency,
          email: user.email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save preferences");
      }

      alert(data.message || "Preferences saved successfully!");
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message || "Failed to save preferences. Please try again.");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Customize Your Newsletter</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Select your interests and delivery frequency to receive personalized
          content from Lumora.ai.
        </p>
      </div>

      <form onSubmit={handleSavePreferences} className="space-y-10">
        {/* Categories */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Choose Your Categories</h2>
          <p className="mb-6 text-muted-foreground max-w-md">
            Select the topics you&apos;d like to include in your personalized
            newsletter.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map(({ id, name, description }) => (
              <label
                key={id}
                htmlFor={`category-${id}`}
                className="flex items-start space-x-4 cursor-pointer select-none"
              >
                <Checkbox
                  id={`category-${id}`}
                  checked={selectedCategories.includes(id)}
                  onCheckedChange={() => toggleCategory(id)}
                  aria-describedby={`desc-${id}`}
                  className="mt-1"
                />
                <div>
                  <div className="text-lg font-medium">{name}</div>
                  <p
                    id={`desc-${id}`}
                    className="text-sm text-muted-foreground max-w-xs"
                  >
                    {description}
                  </p>
                </div>
              </label>
            ))}
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Selected: {selectedCategories.length}{" "}
            {selectedCategories.length === 1 ? "category" : "categories"}
          </p>
        </section>

        {/* Frequency */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Delivery Frequency</h2>
          <p className="mb-6 text-muted-foreground max-w-md">
            How often would you like to receive your newsletter?
          </p>

          <div className="flex flex-col space-y-4 max-w-md">
            {frequencyOptions.map(({ id, name, description }) => (
              <label
                key={id}
                htmlFor={`frequency-${id}`}
                className="flex items-center space-x-4 cursor-pointer select-none"
              >
                <input
                  type="radio"
                  name="frequency"
                  id={`frequency-${id}`}
                  value={id}
                  checked={selectedFrequency === id}
                  onChange={() => setSelectedFrequency(id)}
                  className="w-4 h-4 accent-pink-500"
                />
                <div>
                  <div className="text-lg font-medium">{name}</div>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Submit */}
        <div className="pt-6 border-t border-muted flex justify-between items-center max-w-md">
          <p className="text-muted-foreground">
            {selectedCategories.length}{" "}
            {selectedCategories.length === 1 ? "category" : "categories"}{" "}
            selected, delivery: {selectedFrequency}
          </p>

          <Button
            type="submit"
            disabled={selectedCategories.length === 0}
            variant="outline"
            className="bg-white hover:bg-pink-50 text-pink-600 border-pink-600"
          >
            Save Preferences
          </Button>
        </div>
      </form>
    </div>
  );
}
