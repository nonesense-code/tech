import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Tech Innovators Summit",
    date: "August 15, 2024",
    description:
      "Join us for a day of innovation and technology with industry leaders.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Annual Charity Gala",
    date: "September 10, 2024",
    description:
      "A night of giving back to the community with live performances and auctions.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Coding Bootcamp",
    date: "October 5, 2024",
    description:
      "An intensive bootcamp to teach coding skills to beginners and enthusiasts.",
    image: "https://via.placeholder.com/600x400",
  },
];

const Event = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white">Upcoming Events</h1>
          <p className="mt-4 text-lg text-white">
            Explore our exciting lineup of events.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {event.title}
                </h2>
                <p className="mt-2 text-gray-600">{event.date}</p>
                <p className="mt-4 text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
