import NavBarComponents from "@/app/Components/GeneralComponents/NavBarComponents";
import React from "react";
import HeaderComponent from "../Components/GeneralComponents/HeaderComponent";
import Image from "next/image";
import BlogComponent from "../Components/BlogComponents/BlogComponent";
import CategoriesComponent from "../Components/BlogComponents/HeroSection/CategoriesComponent";
import FooterComponent from "../Components/GeneralComponents/FooterComponent";

export default function Home() {
  return (
    <>
      <NavBarComponents />
      <HeaderComponent title="Discover exclusives articles of investments  chain blocks">
        <section className="container mx-auto relative top-[-25vh] flex flex-col items-center justify-center">
          <Image
            src={"/headerBg.png"}
            alt="Article image"
            width={500}
            height={500}
            className="w-[62vw] "
          />

          <section className="absolute top-[15vh] text-[#FEFEFE] flex flex-col justify-between items-center gap-10 font-Inter">
            <p className="border-2 px-4 py-2 rounded-md  ">Blogs</p>
            <p className="text-xl font-Asap font-medium text-center w-[50vw] leading-relaxed ">
              Meet Chain Coop, our business-oriented community, designed into a
              cooperative with open membership, through Chain Wallet. Simple,
              safe and transparent way.
            </p>
          </section>
        </section>
      </HeaderComponent>

<CategoriesComponent/>

      <BlogComponent/>

      <FooterComponent/>
    </>
  );
}
