import { NextResponse } from "next/server";

export async function POST(request: Request) {
    console.log('post req called');
    
    const body = await request.json();
    const { name, email, message } = body;

    const errors: string[] = [];

    if (!name || name.trim() === '') {
        errors.push('Name is required');
    }

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.push('Valid email is required');
    }

    if (!message || message.trim() === '') {
      errors.push('Message is required')
    }
  
    if (message && message.length < 10) {
      errors.push('Message must be at least 10 characters long')
    }

    if (errors.length > 0) {
        return NextResponse.json({ errors }, {status: 400})
    }

    // Here the data should typically be saved to a database
    // or send an email notification


    console.log('Form submission:', { name, email, message });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200});
}