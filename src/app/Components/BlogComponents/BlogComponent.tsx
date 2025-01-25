import React from "react";
import BlogCard from "./BlogCard";
import BlogSectionTittle from "./BlogSectionTittle";
import { SlCalender } from "react-icons/sl";

export default function BlogComponent() {
  return (
    <section>
      <section className="px-10 pb-20 font-Asap">
        <h1 className="text-3xl font-bold pb-10 px-10">All Blogs</h1>

        <section className="flex  gap-10">
          <form>
            <section className="w-[35vw] shadow-xl flex border-2 border-gray-400 rounded-md">
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
            <p className="flex items-center gap-4 font-bold border-2  px-10 rounded-xl text-md">
              <span>Filter</span> <SlCalender className="text-background" />
            </p>
            <p className="flex items-center gap-4 font-bold border-2  px-10 rounded-xl text-md">
              <span>Sort by</span> <SlCalender className="text-background" />
            </p>
          </section>
        </section>
      </section>

      <section className=" w-full  ml-10 mb-20 container h-[220vh] overflow-hidden ">
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
