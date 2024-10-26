import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, blogId }) => {
  return (
    <Link to={`/blog/${blogId}`}>
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-xl p-6 transition-transform transform hover:scale-110 delay-100 duration-500 lg:flex lg:flex-row flex-col gap-5 mx-1 md:mx-8 cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-cover rounded-lg border-2 border-white mb-1 lg:mb-0"
        />
        <div className="flex flex-col gap-3 lg:flex-grow">
          <h2 className="md:text-2xl text-base font-bold text-white mt-2 lg:mt-0">
            {title}
          </h2>
          <p className="text-white text-balance md:text-base text-xs">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
