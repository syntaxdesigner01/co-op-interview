"use client";
import { recentBlog } from "@/utils/blogData";
import React from "react";
import { GrLinkDown } from "react-icons/gr";
import Image from "next/image";

interface BlogData {
  id: number;
  image: string;
  title: string;
  author: string;
  content: string;
  date: string;
  authorImage: string;
  popular: boolean;
}
export default function CategoriesComponent() {
  function handleReadMore(post: BlogData) {
    console.log(post);
  }

  return (
    <>
      <h1 className="text-3xl font-bold pb-10 px-10">Recent Post</h1>
      <section className="flex px-10 justify-between mb-20">
        <aside>
          <section className="w-[30vw] border-2 rounded-xl shadow-md">
            {recentBlog.blogs.map((post) => (
              <section
                key={post.id}
                className="w-full border-1/2  rounded-xl  relative"
              >
                <section className="">
                  <p>
                    {post.popular && (
                      <span className="absolute top-6 w-20 text-center right-0 left-[20vw]  bg-purple-200 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </p>
                  <Image
                    src={post.image}
                    alt="blog image"
                    width={300}
                    height={300}
                    className="w-full h-[250px] object-cover rounded-md"
                  />
                </section>

                <section className="p-4 ">
                  <section className="flex w-full justify-between gap-4 border-b-2">
                    <h1 className="text-xl font-bold text-background font-Asap mb-2">
                      {post.title}
                    </h1>
                    <section>
                      <section className="flex gap-2 text-md font-semibold ">
                        <Image
                          src={post.authorImage}
                          alt="blog image"
                          width={100}
                          height={100}
                          className="w-[50px] rounded-md"
                        />
                        <p>{post.author}</p>
                      </section>
                    </section>
                  </section>

                  <section className="py-4 text-[#1E1E1E]">
                    <p>{post.content.substring(0, 101)}...</p>
                  </section>

                  <section className="flex justify-between w-full items-center">
                    <p>
                      <span className="text-[#939090]">Posted:</span>
                      <span className="font-medium text-sm"> {post.date}</span>
                    </p>
                    <button
                      className="text-warning border-2 px-4 py-1 rounded-md shadow-sm"
                      onClick={() => handleReadMore(post)}
                    >
                      Read More
                    </button>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </aside>

        <aside className="w-[35%] border-2 shadow-xl p-6 rounded-2xl font-medium   bg-[#f8f6fA] font-Asap">
          <h2 className="text-center font-semibold text-3xl ">Categories</h2>
          <p className="flex items-center gap-4 pt-10 text-2xl">
            Select blog
            <span className="bg-[#ece6f2] h-8 w-8 flex justify-center items-center text-xl rounded-full">
              <GrLinkDown />
            </span>
          </p>
          <ul className="grid grid-cols-2 gap-10 justify-between w-full items-center py-10">
            <li className="border-2 px-8 py-2 text-center shadow-md hover:bg-background hover:text-white border-[#18002D80] rounded-2xl bg-background text-white ">
              All
            </li>
            <li className="border-2 px-8 py-2 text-center shadow-md hover:bg-background hover:text-white border-[#18002D80] rounded-2xl ">
              Block Chain
            </li>
            <li className="border-2 px-8 py-2 text-center shadow-md hover:bg-background hover:text-white border-[#18002D80] rounded-2xl ">
              Saving Chain
            </li>
            <li className="border-2 px-8 py-2 text-center shadow-md hover:bg-background hover:text-white border-[#18002D80] rounded-2xl ">
              Group Saving
            </li>
            <li className="border-2 px-8 py-2 text-center shadow-md hover:bg-background hover:text-white border-[#18002D80] rounded-2xl ">
              Naira Saving
            </li>
            <li className="border-2 px-8 py-2 text-center shadow-md hover:bg-background hover:text-white border-[#18002D80] rounded-2xl ">
              Crypto Saving
            </li>
            <li className="border-2 px-8 py-2 text-center shadow-md hover:bg-background hover:text-white border-[#18002D80] rounded-2xl ">
              Block Chain
            </li>
            <li className="border-2 px-8 py-2 text-center shadow-md hover:bg-background hover:text-white border-[#18002D80] rounded-2xl ">
              Block Chain
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}
