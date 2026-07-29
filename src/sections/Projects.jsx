import { projects } from "../data/content";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#faf5eb] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-bold text-stone-900">
            My Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-stone-600">
            Here are some of the projects I have developed during my
            academic journey and personal learning, showcasing my skills
            in full-stack development, software engineering, and modern
            web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}