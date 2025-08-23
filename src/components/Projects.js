import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectsData from "../data/projects";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div
          id="projects"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-3 text-gray-900">
            Projects
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-xl font-medium leading-relaxed text-dark-orange"
          >
            My Works
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8 ">
          {ProjectsData.reverse().map((project) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              key={project.id}
              className="group relative flex flex-col flex-wrap h-70 w-[80%] mx-auto shadow-md md:shadow-lg rounded-xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-70 w-full object-contain rounded-xl bg-white"
              />
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue rounded-xl">
                <h3 className="text-xl font-semibold text-white my-2">
                  {project.name}
                </h3>
                <p className="px-2 text-base text-white">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {project?.icons?.map((Icon, index) => (
                    <div className="rounded-full p-1.5" key={index}>
                      <Icon className="text-white text-lg" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 justify-center items-center my-6 text-base">
                  <a
                    className="text-darkblue bg-white rounded-full p-2"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="text-darkblue bg-white rounded-full p-2"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="p-[1px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
