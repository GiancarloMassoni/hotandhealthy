
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import kateheader from '@/public/kateheader.jpeg'
import yogalates from '@/public/yogalates.svg'   
import meal from '@/public/meal.svg'
import calendar from '@/public/calendar.svg'


function AboveTheFold() {

  return (
    <div className="bg-secondary font-body text-textPrimary">
      <Navbar/>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl  grid grid-cols-1 lg:grid-cols-2">  
          <div className="text-center py-32 sm:py-48 ">
            <h1 className="text-5xl tracking-tight text-balance text-textPrimary sm:text-7xl font-heading ">
              Move with Intention. Nourish with Purpose.
            </h1>
            <p className="mt-8 text-lg font-medium text-textSecondary sm:text-xl/8 ">
              Private events and personalized meal plans
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className=" bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition"
              >
                Book a Class
              </a>
              
              <button className="border border-primary text-primary px-6 py-3 rounded-full font-body font-medium hover:bg-primary hover:text-light transition">
                Learn More
              </button>
            </div>
          </div>
          <div className='lg:py-10 flex justify-center items-center'>
            <Image src={kateheader} alt={''} className='object-contain rounded-l-4xl border-b border-l border-t border-neutral-200 ' height={48} width={550}></Image>
          </div>
        </div>
       
      </div>
    </div>
  )
}

function BelowTheFold() {
  return(
    <div className="bg-primary font-body text-textPrimary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 items-stretch">
         <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-between items-center shadow-2xl">
    <div className="flex flex-col items-center flex-1">
      <h3 className="text-2xl font-heading mb-4">Class Schedule</h3>
      <div className="h-[90px] flex items-center justify-center mb-4">
        <Image src={calendar} alt="" height={90} width={120} />
      </div>
      <p className="text-textSecondary leading-relaxed px-2">
        Build strength and balance with weekly Mat Pilates and Yoga Sculpt classes. Check the schedule to join a session and move, tone, and feel your best.
      </p>
    </div>
    <a
      href="#schedule"
      className="mt-6 bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition"
    >
      Learn More
    </a>
  </div>
        <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-between items-center shadow-2xl">
    <div className="flex flex-col items-center flex-1">
      <h3 className="text-2xl font-heading mb-4">Private Events</h3>
      <div className="h-[90px] flex items-center justify-center mb-4">
        <Image src={yogalates} alt="" height={75} />
      </div>
      <p className="text-textSecondary leading-relaxed px-2">
        I host private events that combine wellness and fitness, offering personalized Mat Pilates and Hot Yoga Sculpt sessions. Perfect for small groups, team-building, or special gatherings, each session is tailored to your group&apos;s energy and goals.
      </p>
    </div>
    <a
      href="#"
      className="mt-6 bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition"
    >
      Learn More
    </a>
  </div>

  <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-between items-center shadow-2xl">
    <div className="flex flex-col items-center flex-1">
      <h3 className="text-2xl font-heading mb-4">Meal Plans</h3>
      <div className="h-[90px] flex items-center justify-center mb-4">
        <Image src={meal} alt="" width={150} height={90} />
      </div>
      <p className="text-textSecondary leading-relaxed px-2">
        I create personalized meal plans tailored to each individual&apos;s goals, preferences, and lifestyle. No two plans are the same, every plan is unique to help you eat well, feel your best, and achieve results that work for you.
      </p>
    </div>
    <a
      href="#"
      className="mt-6 bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition"
    >
      Learn More
    </a>
  </div>

  
  </div>
    </div>
  )
}

function ClassSchedule() {
   const classes = [
    {
      day: "Monday",
      time: "7:00 AM",
      class: "Mat Pilates",
      studio: "CoreHouse Studio",
      link: "#",
    },
    {
      day: "Tuesday",
      time: "6:00 PM",
      class: "Yoga Sculpt",
      studio: "HotRoom",
      link: "#",
    },
    {
      day: "Wednesday",
      time: "8:30 AM",
      class: "Mat Pilates",
      studio: "Balance Loft",
      link: "#",
    },
    {
      day: "Friday",
      time: "5:30 PM",
      class: "Yoga Sculpt",
      studio: "CoreHouse Studio",
      link: "#",
    },
    {
      day: "Sunday",
      time: "9:00 AM",
      class: "Mat Pilates",
      studio: "HotRoom",
      link: "#",
    },
  ];
  return (
    <section id="schedule" className="w-full bg-secondary py-16 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl text-textPrimary font-heading mb-2">Class Schedule</h2>
        <p className="text-gray-600 mb-10 font-body">
          Find me teaching at studios across Orange County. Join a class that fits your vibe and location.
        </p>

        <div className="overflow-x-auto font-body">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-700 text-sm uppercase tracking-wider">
                <th className="p-3">Day</th>
                <th className="p-3">Time</th>
                <th className="p-3">Class</th>
                <th className="p-3">Studio</th>
                <th className="p-3 text-right">Link</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, i) => (
                <tr
                  key={i}
                  className="bg-white text-textSecondary shadow-sm rounded-xl hover:shadow-md transition"
                >
                  <td className="p-3">{item.day}</td>
                  <td className="p-3">{item.time}</td>
                  <td className="p-3">{item.class}</td>
                  <td className="p-3">{item.studio}</td>
                  <td className="p-3 text-right">
                    <a
                      href={item.link}
                      className="text-sm text-gray-800 underline hover:text-gray-500"
                    >
                      View Schedule →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-body mb-2 text-textPrimary">Private Sessions</h3>
          <p className="text-gray-600 mb-4 font-body">
            Book a personalized Mat Pilates or Yoga Sculpt session tailored to your goals.
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition font-body"
          >
            Inquire Here
          </a>
        </div>
      </div>
    </section>
    )
}

export default function Page(){
  return (
          <>
          <AboveTheFold />
          <BelowTheFold />
          <ClassSchedule/>
          </>
  )
}