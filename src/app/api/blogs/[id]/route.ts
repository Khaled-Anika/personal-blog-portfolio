// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   const filePath = path.join(process.cwd(), '../../blogs/data.json');
//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const data = JSON.parse(fileContents);

//   return NextResponse.json(data.blogs);
// }

import { NextResponse } from 'next/server';
import { blogs } from '../../../blogs/data.json';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const post = blogs.find((p: BlogPost) => p.id.toString() === params.id);

    if (!post) {
        return new NextResponse(null, { status: 404 });
    }
    return NextResponse.json(post);
}

export const revalidate = 3600; // Revalidate every hour

