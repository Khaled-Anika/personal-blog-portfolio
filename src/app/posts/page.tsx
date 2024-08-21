import Link from "next/link";
import prisma from "../lib/db";

// This will run only on server and the render result from return() will be sent to client
export default async function Posts() {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    const postsCount = await prisma.post.count();

    return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Posts ({postsCount})</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
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