"use client";
import { blogData } from "@/utils/blogData";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
    <Swiper
      className="mySwiper relative font-Asap"
      // slidesPerView={3}
      spaceBetween={20}
      pagination={{ clickable: true }}
      breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      }}
    >
      <section className="pb-20">
      {blogData.blogs.map((post) => (
        <SwiperSlide key={post.id} className="border-2 rounded-xl shadow-md">
        <section
          key={post.id}
          className="w-full border-1/2 rounded-xl relative"
        >
          <section className="">
          <p>
            {post.popular && (
            <span className="absolute top-6 w-20 text-center right-0 left-[20vw] bg-purple-200 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
              Popular
            </span>
            )}
          </p>
          <Image
            src={post.image}
            alt="blog image"
            width={300}
            height={300}
            className="w-full h-[200px] object-cover rounded-md"
          />
          </section>

          <section className="p-4">
          <section className="flex w-full justify-between gap-4 border-b-2">
            <h1 className="text-xl font-bold text-background font-Asap mb-2">
            {post.title}
            </h1>
            <section>
            <section className="flex gap-2 text-md font-semibold">
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
        </SwiperSlide>
      ))}
      </section>
    </Swiper>
  );
}
