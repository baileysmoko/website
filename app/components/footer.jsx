import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm text-center">
            © Bailey Smoko 2024. All Rights Reserved
          </p>
          <div className="flex items-center gap-5">
            {/* Additional links or icons can be added here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
