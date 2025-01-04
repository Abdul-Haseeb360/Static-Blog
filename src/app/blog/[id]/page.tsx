import { notFound } from "next/navigation";
import { blogs } from "@/app/lib/data";
import CommentSection from "@/app/Components/CommentSection";
import Image from "next/image";

export default function BlogPost({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative w-full h-64 mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
       
        <div className="prose max-w-none mb-6">
          <p>{blog.content}</p>
        </div>
        <p className=" mb-8">
          {blog.des}
        </p>
        <CommentSection blogId={blog.id} />
      </div>
    </main>
  );
}
