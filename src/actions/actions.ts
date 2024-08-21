"use server"

import prisma from "@/app/lib/db";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    let slug = title.replace(/\s+/g, "-").toLowerCase();

    // Check if the slug already exists, and append a unique identifier if needed
    let counter = 1;
    while (await prisma.post.findUnique({ where: { slug } })) {
        slug = `${title.replace(/\s+/g, "-").toLowerCase()}-${counter}`;
        counter++;
    }

    await prisma.post.create({
        data: {
            title,
            slug,
            content: formData.get("content") as string
        }
    });
};