import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { blogId } = useParams();

  // Sample data to simulate a real blog post based on the ID
  const blogDetails = {
    1: {
      title: "Lorem Ipsum Dolor",
      image: "https://example.com/image1.jpg",
      content: "Detailed content of Lorem Ipsum Dolor blog post goes here...",
    },
    2: {
      title: "Sed Diam Volutpat",
      image: "https://example.com/image2.jpg",
      content: "Detailed content of Sed Diam Volutpat blog post goes here...",
    },
    3: {
      title: "Curabitur Ligula Sapien",
      image: "https://example.com/image3.jpg",
      content:
        "Detailed content of Curabitur Ligula Sapien blog post goes here...",
    },
  };

  const blog = blogDetails[blogId];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
