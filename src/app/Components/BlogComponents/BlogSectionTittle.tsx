"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogSectionTittle({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  const router = useRouter();
  return (
    <section className="flex justify-between items-center mb-6 md:pr-[3%]  font-Asap">
      <section className="flex gap-4 items-center">
        <h1 className="text-xl  md:text-3xl font-bold text-background">
          {title}
        </h1>
        <section className="bg-[#C5B0D878] md:h-16 w-12 md:w-16 h-12 flex justify-center items-center rounded-full">
          <Image
            src={"/blog/bubble.png"}
            alt="blog image"
            width={30}
            height={30}
            className="w- rounded-md"
          />
        </section>
      </section>
      <button
        className="border-2 border-dashed border-purple-700 text-purple-700 font-medium px-8 py-2 rounded-md hover:bg-purple-100"
        onClick={() => router.push(link)}
      >
        View All
      </button>
    </section>
  );
}
