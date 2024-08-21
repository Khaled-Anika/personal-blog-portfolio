import Link from 'next/link'
import Pagination from '../components/Pagination'
import { getPosts } from '../lib/services';

const POSTS_PER_PAGE = 5;

// export async function generateStaticParams() {
//   const posts = await getPosts();
//   const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

//   return Array.from({length: totalPages}, (item, i) => ({
//     page: (i+1).toString()
//   }));
// }

export default async function BlogListing({ searchParams }: { searchParams: { page: string } }) {
  const allPosts : BlogPost[] = await getPosts();
  const currentPage = parseInt(searchParams.page) || 1;
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blogs/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500">Published on {post.date}</p>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} pageType={'blogs'} />
    </div>
  )
}