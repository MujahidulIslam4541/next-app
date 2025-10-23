import Link from "next/link";
import React from "react";

const blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      desc: "blog 1 description ",
    },
    {
      id: 2,
      title: "blog 2",
      desc: "blog 2 description ",
    },
    {
      id: 3,
      title: "blog 3",
      desc: "blog 3 description ",
    },
  ];
  return (
    <div className="mt-10 text-red-400">
      <h2 className="text-red-400">This Is blog page </h2>

      <ul className="text-green-500">
        {blogs.map((blog) => (
          <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default blogs;
