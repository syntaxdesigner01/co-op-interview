import React from "react";
import BlogCard from "./BlogCard";
import BlogSectionTittle from "./BlogSectionTittle";

export default function BlogComponent() {
  return (
    <section className=" w-full mb-20 ml-10 container   ">
      <section className="">
        <BlogSectionTittle title="Block Chain" link="" />
        <BlogCard />
      </section>

      <section className="mt-20">
        <BlogSectionTittle title="Block Chain" link="" />
        <BlogCard />
      </section>
      <section className="mt-20">
        <BlogSectionTittle title="Block Chain" link="" />
        <BlogCard />
      </section>
    </section>
  );
}
