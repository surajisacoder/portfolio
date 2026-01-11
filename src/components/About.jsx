import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="ProfileImg"
            />
          </div>
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-9">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I completed my B.Tech in Information Technology in 2025 from
                CUSAT, Kerala. During my college years, I worked as a Full Stack
                Web Developer Intern at IIT Roorkee, where I built and
                successfully deployed a Tribal Service Platform for tribal
                communities in Jashpur district, Chhattisgarh. The platform
                supported literacy programs, financial awareness, and data
                visualization, and my work was appreciated with a Letter of
                Recommendation from IIT Roorkee.
              </p>
              <p className="text-gray-300 mb-12">
                After graduation, I joined Yuhiro as a Software Developer, where
                I currently work on full-stack product development. I build
                responsive user interfaces and scalable backend features using
                technologies like React, Node.js/Express, PostgreSQL, and REST
                APIs. I enjoy creating real-world solutions, writing clean code,
                and improving products that people actually use. SurajResume
              </p>
              {/* Cards */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutInfo.map((data, index) => (
                    <div
                      key={index}
                      className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="text-purple text-4xl mb-4">
                        <data.icon />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {data.title}
                      </h3>
                      <p className="text-gray-400">{data.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
