import Image from "next/image";
import { ProjectsData } from "../Projects/ProjectsData";

const projects = [
  {
    name: "Hacker News",
    description: "React, HTML & CSS",
    imageUrl: "/assets/hacker-news.png",
    deployedSite: "#",
    githubRepo: "#",
  },
  {
    name: "Hacker News",
    description: "React, HTML & CSS",
    imageUrl: "/assets/puppy-rush.png",
    deployedSite: "#",
    githubRepo: "#",
  },
  {
    name: "Hacker News",
    description: "React, HTML & CSS",
    imageUrl: "/assets/la-biblioteca.png",
    deployedSite: "#",
    githubRepo: "#",
  },
];

export default function Projects() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              My work
            </h2>
            <p className="text-xl text-gray-500">
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
              ultricies donec risus sodales. Tempus quis et.
            </p>
          </div>
          <ul
            description="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {projects.map((project) => (
              <li key={project.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <div className="object-cover shadow-lg rounded-lg">
                      <Image
                        src={project.imageUrl}
                        alt="project-screenshot"
                        height={600}
                        width={800}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{project.name}</h3>
                      <p className="text-indigo-600">{project.description}</p>
                    </div>
                    <ul description="list" className="flex space-x-5">
                      <li>
                        <a
                          href={project.deployedSite}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Deployed Site</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 22 22"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLineJoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={project.githubRepo}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Github</span>
                          <svg
                            className="w-8 h-8"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 22 22"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
