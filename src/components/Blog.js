import React from "react";
import { useDispatch } from "react-redux";
import { filterByAuthor, filterByCategory } from "../redux/Blog/Actions";

export default function Blog({ blog }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={blog.blogImg}
          alt={blog.category[0]}
        />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex gap-2 flex-wrap">
          {blog.category.map((cat) => (
            <p
              className="text-sm font-medium text-indigo-600 mb-1 cursor-pointer"
              key={`${cat}${blog.blogImg}`}
              onClick={() => dispatch(filterByCategory(cat))}
            >
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {cat}
              </span>
            </p>
          ))}
        </div>
        <a href="#" className="block mt-1">
          <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
        </a>
        <div className="mt-4 flex items-center">
          <div
            className="flex-shrink-0"
            onClick={() => dispatch(filterByAuthor(blog.author))}
          >
            <img
              className="h-10 w-10 rounded-full cursor-pointer"
              src={blog.authorAvatar}
              alt="Author Avatar"
            />
          </div>
          <div className="ml-3">
            <p
              className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
              onClick={() => dispatch(filterByAuthor(blog.author))}
            >
              {blog.author}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{blog.published}</time>
              <span aria-hidden="true">&middot;</span>
              <span> {blog.readDuration} min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
