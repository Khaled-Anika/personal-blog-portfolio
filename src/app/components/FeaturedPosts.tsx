import Link from "next/link"

const featuredPosts = [
    { id: 1, title: "Getting Started with Next.js", excerpt: "Learn the basics of Next.js and start building awesome apps." },
    { id: 2, title: "Mastering Tailwind CSS", excerpt: "Discover how to create beautiful, responsive designs with Tailwind CSS." },
    { id: 3, title: "The Power of TypeScript", excerpt: "Explore the benefits of using TypeScript in your projects." },
    { id: 4, title: "Philosophy Bites", excerpt: "Explore the benefits of using TypeScript in your projects." },
    { id: 5, title: "Moral values", excerpt: "Explore the benefits of using TypeScript in your projects." },
]

export default function FeaturedPosts() {
    return (
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <Link href={`/blogs/${post.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                Read more
                </Link>
            </div>
            ))}
        </div>
        </section>
    )
}