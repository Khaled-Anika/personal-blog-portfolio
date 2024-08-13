// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   const filePath = path.join(process.cwd(), '../../blogs/data.json');
//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const data = JSON.parse(fileContents);

//   return NextResponse.json(data.blogs);
// }

import { blogs } from '../../blogs/data.json';

export async function GET() {
    return Response.json(blogs);
}

