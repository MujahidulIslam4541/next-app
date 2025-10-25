import { getPost } from "@/api/getPost";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
};

const postDetails = async ({ params }) => {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  );
};

export default postDetails;
