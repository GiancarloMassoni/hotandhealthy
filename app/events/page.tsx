import ContactModal from "@/components/ContactModal";
import katepose from '@/public/kateballpose.png'
import Image from "next/image";
export default function PrivateEventsPage() {


  return (
    <main className="">
        <section className="bg-secondary text-textPrimary font-body relative flex justify-center items-center pt-30 md:pt-10 h-[80vh]">
            <div className="absolute z-10 flex flex-col">
                <h1 className=" text-black text-center text-4xl md:text-5xl font-heading py-10">Private Events & Classes</h1>
             <p className="text-lg md:text-xl max-w-2xl mx-auto leading-8">
          Host your next private event with me! We tailor every session to your
          group’s size, skill level, and goals. Perfect for birthdays, corporate
          events, or a special day with friends.
        </p>
        <div className="flex justify-center mt-8">
            <ContactModal style={"inline-block bg-primary text-white px-6 py-2 rounded-full hover:opacity-80 transition"} text={"Inquire Here"}/>
        </div>
            </div>
            
            <div className="max-w-7xl mx-auto bg-gray-900 opacity-60 blur-sm" >
                <Image src={katepose} alt="" height={600}></Image>
            </div>
            
            </section>
            {/* <section className="bg-primary text-textPrimary font-body relative flex justify-center items-center">
                <div className="grid md:grid-cols-2 mx-auto grid-cols-1">
                    <div>
                        <Image src={katepose} alt="" height={400}></Image>
                    </div>
                    <div className="pt-10">
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-8">"A full-body Pilates session on mats, tailored to all levels. Perfect for private groups, team-building, or friends."</p>
                    </div>

                </div>
            </section> */}
    </main>
  );
}
