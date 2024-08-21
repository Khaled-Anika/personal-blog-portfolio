import Link from "next/link";
import prisma from "../lib/db";
import { createPost } from "@/actions/actions";
import { revalidatePath } from "next/cache";

// This will run only on server and the render result from return() will be sent to client
export default async function Posts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const postsCount = await prisma.post.count();

  revalidatePath("/posts");

  return (
    <div className="container mx-auto px-4 py-8">
      <form
        action={createPost}
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

      <h1 className="text-3xl font-bold mb-6">All Posts ({postsCount})</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.content}</p>
            {/* <p className="text-sm text-gray-500">Published on {post.createdAt}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
