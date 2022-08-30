import React from "react";
import { useSelector } from "react-redux";
import Blog from "../components/Blog";
import Nav from "../components/Nav";
import Search from "../components/Search";

export default function Blogs() {
  const { blogs } = useSelector((state) => state);
  return (
    <>
      <Nav />

      <Search />

      <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              ALL BLOGS ARE HERE
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {blogs.map(
              (blog) => blog.isShow && <Blog blog={blog} key={blog.id} />
            )}
          </div>
        </div>
      </section>

      <section className="pt-6">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
          <div>Copyright 2022 Learn with Sumit.</div>
          <div>
            <a
              href="https://youtube.com/learnwithsumit"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
