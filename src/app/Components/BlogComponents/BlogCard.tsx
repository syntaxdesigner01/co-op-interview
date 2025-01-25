"use client";
import { blogData } from "@/utils/blogData";
import { useRouter } from "next/navigation";
import React from "react";
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

export default function BlogCard() {
  const router = useRouter();

  const handleReadMore = (post: BlogData) => {
    console.log(post);
    router.push(`/blog/${post.id}`);
  };

  return (
    <section className="grid grid-cols-3 gap-6 relative font-Asap">
      {blogData.blogs.map((post) => (
        <section
          key={post.id}
          className="w-full border-2 shadow-md rounded-xl h-[70vh] relative"
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
              width={100}
              height={200}
              className="w-full h-[200px] object-cover rounded-md"
            />
          </section>

          <section className="p-4 ">
            <section className="flex w-full justify-between gap-4 border-b-2">
              <h1 className="text-2xl font-bold text-background font-Asap mb-2">
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

            <section className="py-4">
              <p>{post.content.substring(0, 100)}...</p>
            </section>

            <section className="flex justify-between w-full items-center">
              <p>
                <span className="text-[#939090]">Posted:</span>
                <span className="font-medium text-sm"> {post.date}</span>
              </p>
              <button onClick={() => handleReadMore(post)}>Read More</button>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
}
