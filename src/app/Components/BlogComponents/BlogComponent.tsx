import React from "react";
import BlogCard from "./BlogCard";
import BlogSectionTittle from "./BlogSectionTittle";

export default function BlogComponent() {
  return (
    <>
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
    </>
  );
}
