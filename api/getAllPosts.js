export const getAllPosts = async () => {
  const result = fetch("https://jsonplaceholder.typicode.com/posts?_limit=20", {
    next: {
      revalidate: 10,
    },
  });

  return (await result).json();
};
