// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./styles.css";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { projectdatatype, projectsdata } from "../../data";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({ project }: { project: projectdatatype }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="flex flex-col relative">
      <div ref={ref}>
        <div 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.imagepath})`,
          backgroundClip: 'border-box',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center', 
          backgroundSize: 'cover',

        }}
        className="w-full h-96 absolute flex flex-col items-end justify-center p-5">
        <div className="font-bold text-slate-100 mb-5 text-xl">{project.title}</div>
        <div className="text-sm mb-3">{project.description}</div>
        <div className='flex flex-wrap gap-2'>
         {project.technologies.map((technology , index) => (
          <div key={index} className='bg-slate-700 px-2 py-1 rounded-full text-xs'>
             {technology}
          </div>
         ))}
        </div> 
        <a
          href={project.githublink}
          className="text-sm mt-3"
          target='_blank'>
             Github
        </a>
          <a href={project.weblink} target='_blank'>Website</a> 
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {projectsdata.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
}
