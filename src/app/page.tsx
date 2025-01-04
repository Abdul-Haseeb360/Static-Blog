import BlogList from "./Components/BlogList";


export default function Home() {
  return (
  <div >
    <h1 className="text-4xl font-bold mb-8">Welcome to MyBlog</h1>
      <p className="text-xl text-gray-600 mb-8">Discover insightful articles and stay up-to-date with the latest trends.</p>
      <BlogList />
  </div>
  );
}
