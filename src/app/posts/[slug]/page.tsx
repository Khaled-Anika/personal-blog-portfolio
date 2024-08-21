import prisma from "@/app/lib/db";
import Link from "next/link";

// This will run only on server and the render result from return() will be sent to client
export default async function Posts({ params }: { params: { slug: string } }) {
    const post = await prisma.post?.findUnique({
        where: {
            slug: params.slug
        }
    });
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
            // {post?.date && <p className="text-sm text-gray-500 mb-4">Published on {post?.date}</p>}
            {post?.content && <div className="prose max-w-none">{post?.content}</div>}
        </div>
    );
}