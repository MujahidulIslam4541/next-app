import { getAllPosts } from "@/api/getAllPosts";
import Link from "next/link";
import React from "react";

const posts = async () => {
  const posts = await getAllPosts();
  return (
    <div>
      <h1 className="text-2xl font-bold ">All post </h1>

      <div className="grid grid-cols-4 gap-2 ">
        {posts.map((post) => (
          <div key={post.id} className="border-2 border-red-400  rounded-2xl bg-gray-100 p-2">
            <h2 className="text-xl font-bold text-green-500">{post.title}</h2>
            <p className="text-sm text-blue-500 mb-4">{post.body}</p>
            <Link className="bg-pink-400 p-2 rounded-2xl " href={`/posts/${post.id}`}>view details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default posts;
