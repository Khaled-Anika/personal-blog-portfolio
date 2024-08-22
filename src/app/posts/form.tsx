"use client";

import { createPost } from "@/actions/actions";
import { useRef } from "react";
import Button from "./button";
import { rejects } from "assert";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();

        // Simple example of error handling
        // const { error } = await createPost(formData);
        // if (error) {
        //   alert(error.message);
        // }
        await new Promise((resolve) => setTimeout(resolve, 2000));
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
      <Button />
    </form>
  );
}
