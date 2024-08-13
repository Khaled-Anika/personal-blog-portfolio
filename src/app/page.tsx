import Link from 'next/link'
import FeaturedPosts from './components/FeaturedPosts'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My Blog</h1>
      <FeaturedPosts />
      <div className="text-center mb-12">
        <Link href="/blog" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          See all posts
        </Link>
      </div>
      <AboutSection />
    </main>
  )
}