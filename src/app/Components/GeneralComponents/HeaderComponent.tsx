import React from "react";

interface Header {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  children?: React.ReactNode;
}
export default function HeaderComponent({
  title,
  subtitle,
  buttonText,
  children
}: Header) {
  return (
    <>
      <header className=" mt-5 bg-background text-white text-center md:h-[60vh] h-[40vh]">
        <section className="container mx-auto p-4 pt-20 flex flex-col items-center justify-center">
          {title && (
            <h1 className="md:text-4xl text-2xl font-semibold font-Asap md:w-[60vw] leading-normal ">
              {title}
            </h1>
          )}
          {subtitle && (
            <section>
              <p>{subtitle}</p>
              {buttonText && <button>{buttonText}</button>}
            </section>
          )}
        </section>
      </header>

      {children}
    </>
  );
}
