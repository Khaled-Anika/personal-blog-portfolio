import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const isAuthenticated = true;

    const url = request.nextUrl.clone();
    url.pathname = '/login'

    if (!isAuthenticated) {
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/posts"],
};