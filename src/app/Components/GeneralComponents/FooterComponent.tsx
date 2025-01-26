import React from 'react'
import { BiFile } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function FooterComponent() {
  return (
    <footer className="font-Asap">
      <section className="flex justify-center items-center mb-20 relative bottom-[-12em]">
        <section className="bg-secondary w-[80vw] h-[48vh] p-6 rounded-xl flex flex-col justify-center items-center">
          <p className=" text-center font-medium text-2xl leading-relaxed">
            Stay Ahead with Chain Co-op <br /> Subscribe for the latest in
            tech-driven cooperative innovations and <br /> investment
            opportunities.
          </p>

          <form className="flex justify-center items-center gap-2 pt-6">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-2 outline-none border-slate-300 w-[30vw] h-12 rounded-md px-4"
            />
            <button className="bg-background w-24 h-12 rounded-md text-white">
              Join Now
            </button>
          </form>
        </section>
      </section>

      <section className="p-10 px-4 bg-background text-white  pt-[16%]  w-full">
        <section className="flex gap-4 justify-between border-b-4 pb-10 border-white">
          <section className="w-[30vw] flex flex-col gap-4">
            <h1 className="font-semibold">
              Nigeria&apos;s First Blockchain-Powered Cooperative
            </h1>

            <section className="flex flex-col gap-4">
              <p>
                 Chain Co-op is a tech-driven, worker-owned cooperative that
                guarantees returns through cutting-edge blockchain technology
                and sustainable business investments.
              </p>
              <p className="flex items-center gap-2">
                Chain Co-op Statute & Legal Structure{" "}
                <span>
                  <BiFile className="text-white text-xl" />
                </span>
              </p>
              <p>
                Understand the legal framework and cooperative governance that
                protect your investments
              </p>
              <p className="flex items-center gap-2 ">
                Download our Statute and Constitutive Act.
                <span>
                  <BiFile className="text-white text-xl" />
                </span>
              </p>
            </section>
          </section>

          <section className="flex justify-between w-[35vw]">
            <section>
              <h1 className="font-semibold">Company</h1>
              <ul className="flex flex-col gap-4 pt-6">
                <li>About Us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Support</li>
              </ul>
            </section>
            <section>
              <h1 className="font-semibold">Explore</h1>
              <ul className="flex flex-col gap-4 pt-6">
                <li>Why Chain Co-op</li>
                <li>Membership Cards</li>
                <li>Projects</li>
                <li>Blog</li>
              </ul>
            </section>
            <section>
              <h1 className="font-semibold">Legal</h1>
              <ul className="flex flex-col gap-4 pt-6">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Disclaimer </li>
              </ul>
            </section>
          </section>
          <section className="w-[23vw] flex flex-col gap-4">
            <h1 className="font-semibold">Contact</h1>
            <p className="tracking-wide leading-relaxed">
              Let&apos;s build a better future together! Visit us at No. 9
              Ogunlana Street, Ikosi Ketu, Lagos, or reach out via email or
              phone. Join Chain Co-op today!
            </p>
            <p>info@chainerative.com.ng</p>
            <p>+234 809 322 7696</p>
          </section>
        </section>

        <section className='flex justify-between w-full pt-4'>
          <aside className='text-sm'>
            &copy; {new Date().getFullYear()} Chain Cooperative. All rights
            reserved.
          </aside>

          <aside className='flex gap-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </aside>
        </section>
      </section>
    </footer>
  );
}

