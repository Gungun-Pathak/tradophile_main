import React from "react";
import Card from "./Card";

const Blogs = () => {
  const blogData = [
    {
      blogId: 1,
      image: "https://example.com/image1.jpg",
      title: "Lorem Ipsum Dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      blogId: 2,
      image: "https://example.com/image2.jpg",
      title: "Sed Diam Volutpat",
      description: "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    {
      blogId: 3,
      image: "https://example.com/image3.jpg",
      title: "Curabitur Ligula Sapien",
      description: "Curabitur ligula sapien, tincidunt non, euismod vitae.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {blogData.map((blog, index) => (
        <div key={index} className="w-full lg:w-4/5 py-6">
          <Card
            image={blog.image}
            title={blog.title}
            description={blog.description}
            blogId={blog.blogId}
          />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
