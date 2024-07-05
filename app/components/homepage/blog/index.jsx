import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { blogs } from '@/utils/data/blogs';

function Blog() {
  return (
    <div id='blogs' className="relative z-50 my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-blue-500"></span>
          <span className="bg-blue-500 w-fit text-white p-2 px-5 text-xl rounded-md">
            Featured Projects
          </span>
          <span className="w-24 h-[2px] bg-blue-500"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.slice(0, 6).map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
