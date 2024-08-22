"use client";

import { createPost } from "@/actions/actions";
import { useRef } from "react";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await createPost(formData);
      }}
      className="space-y-4 mb-8 bg-slate-200 rounded-lg shadow-md p-4"
    >
      <div>
        <label htmlFor="title" className="block mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="content" className="block mb-1">
          Content
        </label>
        <textarea
          name="content"
          rows={5}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        Create Post
      </button>
    </form>
  );
}
