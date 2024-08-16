
export async function getPosts(): Promise<BlogPost[]> {
    console.log('API getting called');
    const res = await fetch('http://localhost:3000/api/blogs', { cache: 'force-cache' });
    if (!res.ok) {
        throw new Error('Failed to fetch blog posts');
    }
    return res.json();
}