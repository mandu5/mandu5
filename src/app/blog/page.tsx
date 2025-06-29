"use client";
import React from "react";
import Blog from "@/components/Blog/Blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Blog />
      </div>
    </main>
  );
}
