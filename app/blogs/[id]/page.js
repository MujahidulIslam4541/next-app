import React from "react";

const blogPage = ({ params }) => {
  const { id } = params;
  return <div className="text-red-500">the blog id is: {id}</div>;
};

export default blogPage;
