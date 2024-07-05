import { experiences } from "@/utils/data/experience";
import dynamic from 'next/dynamic';

const ExperienceItem = dynamic(() => import('./ExperienceItem'), { ssr: false });

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 lg:my-24">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-blue-500"></span>
          <span className="bg-blue-500 w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-blue-500"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-6 w-full max-w-4xl">
            {experiences.map((experience, index) => (
              <ExperienceItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;