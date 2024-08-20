export async function getPosts(): Promise<BlogPost[]> {
    // for SSG(Static Site Generation)
    // const res = await fetch('http://localhost:3000/api/blogs', { cache: 'force-cache' });

    // for ISR(Incremental Static Regeneration)
    const res = await fetch('http://localhost:3000/api/blogs', { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error('Failed to fetch blog posts');
    }
    return res.json();
};

export async function getBlogPost(id: string): Promise<BlogPost> {
    // for ISR(Static Site Generation)
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error('Failed to fetch blog post');
    }
    return res.json();
};

export async function postContactData(data: ContactData) {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
        throw new Error('Failed to save contact data');
    }
    return res.json();
}