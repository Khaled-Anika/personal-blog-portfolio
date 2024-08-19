export async function getPosts(): Promise<BlogPost[]> {
    console.log('API getting called');

    // for SSG(Static Site Generation)
    // const res = await fetch('http://localhost:3000/api/blogs', { cache: 'force-cache' });
    
    // for ISR(Incremental Static Regeneration)
    const res = await fetch('http://localhost:3000/api/blogs', { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error('Failed to fetch blog posts');
    }
    return res.json();
}

export async function getBlogPost(id: string): Promise<BlogPost> {
    // for ISR(Static Site Generation)
    const res = await fetch(`http://your-api-url/api/blogs/${id}`, { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error('Failed to fetch blog posts');
    }
    return res.json();
}