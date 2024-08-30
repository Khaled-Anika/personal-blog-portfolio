"use client";

import { useState, useEffect } from "react";
import { getBlogPost } from "../lib/services";

interface BlogPostProps {
  id: string;
}

const PostDetails: React.FC<BlogPostProps> = ({ id }) => {
  const [post, setPost] = useState<BlogPost>();

  useEffect(() => {
    getBlogPost(id)
      .then((data) => {
        setPost(data);
        console.log("async data", post);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.date && (
        <p className="text-sm text-gray-500 mb-4">Published on {post.date}</p>
      )}
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      {post.description && (
        <div className="prose max-w-none">{post.description}</div>
      )}
    </div>
  );
};

export default PostDetails;
