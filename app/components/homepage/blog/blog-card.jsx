'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

function BlogCard({ blog }) {
  if (!blog) {
    return null;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group flex flex-col h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="h-48 w-full overflow-hidden rounded-t-lg">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            width={1920}
            height={1080}
            objectFit="cover"
            className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'
          />
        ) : (
          <div className="w-full h-full bg-gray-300"></div>
        )}
      </div>
      <div className="p-2 sm:p-3 flex flex-col flex-grow">
        <Link href={blog.link || '#'}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-blue-500'>
            {blog.title}
          </p>
        </Link>
        {blog.award && (
          <p className='text-sm font-semibold text-yellow-400 mb-2'>
            🏆 {blog.award}
          </p>
        )}
        {blog.description && (
          <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6'>
            {blog.description}
          </p>
        )}
      </div>
      <div className="p-2 sm:p-3 mt-auto">
        {blog.languages && (
          <p className='mb-2 text-sm text-[#16f2b3]'>
            {blog.languages}
          </p>
        )}
        <div className="flex justify-between items-center">
          {blog.link && (
            <Link href={blog.link} target="_blank" rel="noopener noreferrer">
              <button className='bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs'>
                View Project
              </button>
            </Link>
          )}
          {blog.Github && (
            <Link href={blog.Github} target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-[#16f2b3] text-xl" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default BlogCard;