import { projects } from '../../portfolio/data.json';

export async function GET() {
    return Response.json(projects);
}

export const revalidate = 3600; // Revalidate every hour