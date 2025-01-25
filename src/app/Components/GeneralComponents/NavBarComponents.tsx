import Image from 'next/image'
import React from 'react'

export default function NavBarComponents() {
  return (
    <nav className="flex justify-between items-center h-16 w-full bg-white text-black px-20  py-10">
      <section>
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-[200px] "
        />
      </section>
      <section>
        <ul className="flex justify-between items-center  gap-10 font-Inter">
          <li>Why Chain Co-op</li>
          <li>Our Story </li>
          <li>Membership Cards</li>
          <li>Contact</li>
        </ul>
      </section>
      <section>
        <button className='bg-secondary w-[12vw] font-medium h-12 rounded-md'>Login </button>
      </section>
    </nav>
  );
}
