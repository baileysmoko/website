'use client';

import Image from "next/image";
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EducationItem = ({ education, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="p-3 relative text-white"
    >
      <div className="flex justify-center">
        <p className="text-xs sm:text-sm text-[#16f2b3]">
          {education.duration}
        </p>
      </div>
      <div className="flex items-center gap-x-8 px-3 py-5">
        <div className="w-50 h-50 flex items-center justify-center">
          {education.image ? (
            <Image 
              src={education.image}
              alt={education.title}
              width={200}
              height={200}
              className="object-cover rounded-lg"
            />
          ) : (
            <BsPersonWorkspace size={300} />
          )}
        </div>
        <div>
          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
            {education.title}
          </p>
          <p className="text-sm sm:text-base">{education.institution}</p>
          <p className="text-sm sm:text-base mt-2">
            <strong>Relevant Courses:</strong> {education.RelevantCourses}
          </p>
          <p className="text-sm sm:text-base mt-2">
            <strong>Teaching Assistant:</strong> {education.TeachingAssistant}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

function Education() {
  return (
    <div id="education" className="relative z-50 my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-blue-500"></span>
          <span className="bg-blue-500 w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-blue-500"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-6 w-full max-w-4xl">
            {educations.map((education, index) => (
              <EducationItem key={education.id} education={education} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;