
const blogPage = async({ params }) => {
  const { id } = await params;
  return <div className="text-red-500">the blog id is: {id}</div>;
};

export default blogPage;
