import PostDetails from "@/app/components/PostDetails";
import { getPosts } from "@/app/lib/services";

export async function generateStaticParams() {
  // To generate the static paths at build time
  const posts = await getPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  return <PostDetails id={params.id} />;
}
