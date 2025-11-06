
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
            <Image src={kateheader} alt={''} className='object-contain rounded-l-4xl border-b-1 border-l-1 border-t-1 border-neutral-200 ' height={48} width={550}></Image>
          </div>
        </div>
       
      </div>
    </div>
  )
}

function BelowTheFold() {
  return(
    <div className="bg-primary font-body text-textPrimary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        <div className='min-h-48 bg-secondary rounded-2xl p-6 flex flex-col justify-center items-center shadow-2xl'>
          <h3 className='text-2xl pb-5 font-heading'>Private Events</h3>
          <Image src={yogalates} alt={''} height={75} className=''/>
          <p className='py-4 text-textSecondary'>
            I host private events that combine wellness and fitness, offering personalized Mat Pilates and Hot Yoga Sculpt sessions. Perfect for small groups, team-building, or special gatherings, each session is tailored to your group&apos;s energy and goals.
          </p>
            <a href="#" className=" bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition">
                Learn More
              </a>
        </div>
        <div className='min-h-48 bg-secondary rounded-2xl p-6 flex flex-col justify-center items-center shadow-2xl'>
         <h3 className='text-2xl pb-5 font-heading'> Meal Plans</h3>
         <Image src={meal} alt={''} height={90} className=''/>
         <p className='py-5 text-textSecondary'>
          I create personalized meal plans tailored to each individual&apos;s goals, preferences, and lifestyle. No two plans are the same, every plan is unique to help you eat well, feel your best, and achieve results that work for you.
         </p>
           <a href="#" className=" bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition">
                Learn More
            </a>
        </div>
        <div className='min-h-48 bg-secondary rounded-2xl p-6 flex flex-col justify-center items-center shadow-2xl'>
        <h3 className='text-2xl pb-5 font-heading'>Class Schedule</h3>
        <Image src={calendar} alt={''} height={90} className=''/>
        <p className='pt-5 text-textSecondary'>
          
        </p>
        </div>
        </div>
    </div>
  )
}

export default function Page(){
  return (
          <>
          <AboveTheFold />
          <BelowTheFold />
          </>
  )
}