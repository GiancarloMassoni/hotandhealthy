'use client'
import { useState } from "react";

export default function ClassSchedule() {
  const classes = [
    { day: "Monday", time: "8:30 AM", class: "Yogalates", studio: "Class 46", link: "#" },
    { day: "Monday", time: "5:30 PM", class: "Ass & Abs", studio: "Sculpt Studios", link: "#" },
    { day: "Monday", time: "6:45 PM", class: "Ass & Abs", studio: "Sculpt Studios", link: "#" },
    { day: "Tuesday", time: "8:30 AM", class: "Sculpt", studio: "Sculpted Space", link: "#" },
    { day: "Tuesday", time: "9:30 AM", class: "Sculpt", studio: "Sculpted Space", link: "#" },
    { day: "Tuesday", time: "10:30 AM", class: "Sculpt", studio: "Sculpted Space", link: "#" },
    { day: "Tuesday", time: "4:45 PM", class: "Yogalates", studio: "Class 46", link: "#" },
    { day: "Wednesday", time: "9:45 AM", class: "Ass & Abs", studio: "Sculpt Studios", link: "#" },
    { day: "Wednesday", time: "4:30 PM", class: "Yoga Sculpt", studio: "Class 46", link: "#" },
    { day: "Wednesday", time: "6:00 PM", class: "Yogalates", studio: "Class 46", link: "#" },
    { day: "Thursday", time: "8:30 AM", class: "Arms & Abs", studio: "Sculpt Studios", link: "#" },
    { day: "Thursday", time: "9:30 AM", class: "Arms & Abs", studio: "Sculpt Studios", link: "#" },
    { day: "Thursday", time: "12:00 PM", class: "Yogalates", studio: "Class 46", link: "#" },
  ];

  const [selectedStudio, setSelectedStudio] = useState<string>("All");

  // Get unique studios
  const studios = ["All", ...Array.from(new Set(classes.map(cls => cls.studio)))];

  // Assign colors to each studio
  const studioColors: Record<string, string> = {
    "Class 46": "bg-neutral-200 border-neutral-400",
    "Sculpt Studios": "bg-yellow-200 border-yellow-400",
    "Sculpted Space": "bg-teal-200 border-teal-400",
  };

  // Filter classes based on selected studio
  const filteredClasses = selectedStudio === "All"
    ? classes
    : classes.filter(cls => cls.studio === selectedStudio);

  // Group classes by day
  const grouped = filteredClasses.reduce((acc: any, cls) => {
    if (!acc[cls.day]) acc[cls.day] = [];
    acc[cls.day].push(cls);
    return acc;
  }, {});

  return (
    <section className="w-full bg-secondary py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl  mb-2 font-heading">Class Schedule</h2>
        <p className="text-gray-600 font-body mb-6">
          Find me teaching at multiple studios across Orange County. Select a studio to see its classes.
        </p>

        {/* Studio filter */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {studios.map((studio) => (
            <button
              key={studio}
              onClick={() => setSelectedStudio(studio)}
              className={`px-4 py-2 rounded-full border ${
                selectedStudio === studio
                  ? "bg-black text-white"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              } transition`}
            >
              {studio}
            </button>
          ))}
        </div>

        {/* Schedule */}
        <div className="space-y-8">
          {Object.entries(grouped).length === 0 ? (
            <p className="text-gray-600">No classes available for this studio.</p>
          ) : (
            Object.entries(grouped).map(([day, dayClasses]: any) => (
              <div key={day} className="bg-white shadow-sm rounded-xl p-6">
                <h3 className="text-xl font-medium mb-4">{day}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dayClasses.map((cls: any, idx: number) => (
                    <div
                      key={idx}
                      className={`p-4 border rounded-lg hover:shadow-md transition ${studioColors[cls.studio]}`}
                    >
                      <p className="font-semibold">{cls.class}</p>
                      <p className="text-gray-700">{cls.time} • {cls.studio}</p>
                      <a
                        href={cls.link}
                        className="text-sm text-gray-800 underline hover:text-gray-500"
                      >
                        View Schedule →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-medium mb-2">Private Sessions</h3>
          <p className="text-gray-600 mb-4">
            Book a personalized Mat Pilates or Yoga Sculpt session tailored to your goals.
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Inquire Here
          </a>
        </div>
      </div>
    </section>
  );
}
