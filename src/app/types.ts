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

interface Project {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}