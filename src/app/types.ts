interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    description?: string;
    date?: string;
}

interface ContactData {
    name: string;
    email: string;
    message: string;
}