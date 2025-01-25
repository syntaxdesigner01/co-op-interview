import React from 'react'

export default function FooterComponent() {
  return (
    <footer className='font-Asap'>
      <section className="flex justify-center items-center mb-20 relative bottom-[-12em]">
        <section className="bg-secondary w-[80vw] h-[48vh] p-6 rounded-xl flex flex-col justify-center items-center">
          <p className=' text-center font-medium text-2xl leading-relaxed'>
            Stay Ahead with Chain Co-op <br /> Subscribe for the latest in tech-driven
            cooperative innovations and <br /> investment opportunities.
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


      <section className='p-10 bg-background text-white h-[100vh]'>
        <section></section>
        <section></section>
        <section></section>
      </section>
    </footer>
  );
}

// &copy; {new Date().getFullYear()} Copyright: Your Website Name