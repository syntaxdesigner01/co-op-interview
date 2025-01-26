import React from "react";
import BlogCard from "./BlogCard";
import BlogSectionTittle from "./BlogSectionTittle";
import { SlCalender } from "react-icons/sl";

export default function BlogComponent() {
  return (
    <section>
      <section className="px-10 pb-20 font-Asap">
        <h1 className="text-3xl font-bold pb-10 px-10 text-center md:text-start w-full">
          All Blogs
        </h1>

        <section className="flex flex-col md:flex-row  gap-10">
          <form>
            <section className="md:w-[35vw] w-full shadow-xl flex border-2 border-gray-400 rounded-md">
              <input
                className=" px-4 py-4 rounded-l-md outline-none  w-full"
                type="text"
                placeholder="Search articles"
              />
              <button
                className="bg-background text-white px-10 py-2 rounded-r-md "
                type="submit"
              >
                Search
              </button>
            </section>
          </form>

          <section className="flex gap-4">
            <p className="flex items-center gap-2 md:gap-4 font-bold border-2  px-20 md:px-10 py-2 md:py-0 rounded-xl text-md">
              <span>Filter</span> <SlCalender className="text-background" />
            </p>
            <p className="flex items-center gap-2 md:gap-4 font-bold border-2  px-16 md:px-10 py-2 md:py-0 rounded-xl text-md">
              <span>Sort by</span> <SlCalender className="text-background" />
            </p>
          </section>
        </section>
      </section>

      <section className=" w-full  md:ml-10 ml-4 mb-20 container h-[220vh] overflow-hidden ">
        <section className="">
          <BlogSectionTittle title="Block Chain" link="" />
          <BlogCard />
        </section>

        <section className="mt-16">
          <BlogSectionTittle title="Saving Chain" link="" />
          <BlogCard />
        </section>
        <section className="mt-16">
          <BlogSectionTittle title="Group Savings" link="" />
          <BlogCard />
        </section>
      </section>

      <section className="flex justify-center mb-20">
        <button className="bg-background text-white px-10 py-2 rounded-md">
          View All
        </button>
      </section>
    </section>
  );
}
