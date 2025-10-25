import { getPost } from "@/api/getPost";
import { getPostComments } from "@/api/getPostComments";
import Comments from "@/app/components/Coments";

import React, { Suspense } from "react";

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
  const postPromise = getPost(id);
  const comments = getPostComments(id);

  const post = await postPromise;
  return (
    <div>
      <h2>{post.title}</h2>
      <hr></hr>

      <Suspense fallback="<h2>Loading comments</h2>">
        <Comments  promise={comments}></Comments>
      </Suspense>
    </div>
  );
};

export default postDetails;
