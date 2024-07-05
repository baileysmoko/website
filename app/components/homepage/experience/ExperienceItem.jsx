'use client';

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { useRef } from "react";

const ExperienceItem = ({ experience, index }) => {
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
      className="p-4"
    >
      <div className="flex flex-col items-center">
        <p className="text-xs sm:text-sm text-[#16f2b3] mb-2">
          {experience.duration}
        </p>
        <div className="flex items-center w-full">
          <div className="flex-shrink-0 mr-4 w-16 h-16 flex items-center justify-center">
            {experience.image ? (
              <Image 
                src={experience.image}
                alt={experience.title}
                width={60}
                height={60}
                className="object-cover rounded-lg"
              />
            ) : (
              <BsPersonWorkspace size={60} className="text-[#16f2b3]" />
            )}
          </div>
          <div className="flex-grow">
            <p className="text-sm sm:text-lg mb-1 font-medium uppercase">
              {experience.title}
            </p>
            <p className="text-xs sm:text-sm">
              {experience.company}
            </p>
            <p className="text-xs sm:text-sm mt-1">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;