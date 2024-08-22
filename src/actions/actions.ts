"use server"

import prisma from "@/app/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    let slug = title.replace(/\s+/g, "-").toLowerCase();

    // Check if the slug already exists, and append a unique identifier if needed
    let counter = 1;
    while (await prisma.post.findUnique({ where: { slug } })) {
        slug = `${title.replace(/\s+/g, "-").toLowerCase()}-${counter}`;
        counter++;
    }

    try {
        await prisma.post.create({
            data: {
                title,
                slug,
                content: formData.get("content") as string
            }
        });
    } catch (e) {
        return {
            error: e
        }
    }

    revalidatePath("/posts");
};

export async function editPost(formData: FormData, id: string) {
    const title = formData.get("title") as string;
    let slug = title.replace(/\s+/g, "-").toLowerCase();

    await prisma.post.update({
        where: { id },
        data: {
            title,
            slug,
            content: formData.get("content") as string
        }
    });

    revalidatePath("/posts");
};

export async function deletePost(id: string) {
    await prisma.post.delete({where: { id }});

    revalidatePath("/posts");
}