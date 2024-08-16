import { getPosts } from "@/app/lib/services";

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  const post = posts.find(p => p.id.toString() === params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.date && <p className="text-sm text-gray-500 mb-4">Published on {post.date}</p>}
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      {post.description && <div className="prose max-w-none">{post.description}</div>}
    </div>
  );
}