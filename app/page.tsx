import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function AboveTheFold () {
  return(
    <div className="w-full bg-red-700 text-white">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-2 p-0">
          <div className="px-4 lg:pt-6">
          <h1 className="mx-10 mt-20 mb-4 text-center text-5xl font-bold md:mx-0 md:text-7xl lg:text-left italic">HOT & HEALTHY
          </h1>
          <h2 className="font-base mb-6 text-center text-lg md:text-2xl lg:text-left">Feel Strong. Move Confidently. <br/>
          Personalized fitness coaching that fits your goals, your lifestyle, and your schedule.<br /> Real support, real results—let&apos;s get started.


          </h2>
          <Link className="font-semibold text-primary-800 flex justify-center lg:justify-start" href="/">
          <span className="pr-1">Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="inline-block h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg>
          </Link>
          </div>
          <div className="relative w-full flex justify-center">
            <iframe width="472" height="740" src="https://www.instagram.com/p/DFlyITayHh0/embed/" frameBorder="0"></iframe>

             {/* <Image src="/hhai.png" alt={""} className="" fill/> */}
          </div>
          <div>

        {/* <Image src="/hhai.png" alt={""} className="object-fit" fill/> */}

          </div>
        </div>
        </div>
  )
}

function BelowTheFold () {
  return(
      <div className="w-full bg-white text-red-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 p-0">
          <div className="px-4">
          <h2 className="mx-10 mt-20 mb-4 text-5xl font-bold md:mx-0 md:text-7xl text-center italic">EVENTS
          </h2>
          {/* <Link href='/'> */}
          <h3 className="font-semibold  text-4xl flex justify-center pb-10">See Upcoming Events</h3>
          {/* </Link> */}
          <div>
          <div className="flex justify-center">
             <iframe src="https://calendar.google.com/calendar/embed?src=bbc87d8bf4661ade95c97e7f350ad5c1488ec6e1720d2f7fb64cb3c6a48301c5%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"
          ></iframe> </div>
          </div>
        
      </div>
      </div>
      </div>)
}


export default function Home() {
  return (
    <div>

      <header className="bg-red-700">
        <Navbar />
      </header>
      <main>
        <AboveTheFold />
        <BelowTheFold />


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">



      </footer>
    </div>
  );
}