import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article
      className="
        perspective
        w-full
        h-[420px]
      "
    >
      {/* 3D Container */}
      <div
        className="
          group
          relative
          h-full
          w-full
          transform-gpu
          preserve-3d
          transition-transform
          duration-700
          hover:rotate-y-180
        "
      >
        {/* ================= FRONT ================= */}

        <div
          className="
            absolute
            inset-0
            backface-hidden
            overflow-hidden
            rounded-3xl
            bg-white
            border
            border-stone-200
            shadow-xl
          "
        >
          {/* Image */}

          <div className="relative h-52 overflow-hidden">
            <img
              src={project.image || "/projects/default.png"}
              alt={project.title}
              className="
                h-full
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            <span
              className="
                absolute
                top-4
                left-4
                rounded-full
                bg-white/90
                px-4
                py-1
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-amber-700
              "
            >
              Featured
            </span>
          </div>

          {/* Content */}

          <div className="flex h-[calc(100%-13rem)] flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-stone-500">
                Hover to discover this project
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies?.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    bg-amber-50
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-amber-700
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BACK ================= */}

        <div
          className="
            absolute
            inset-0
            rotate-y-180
            backface-hidden
            rounded-3xl
            bg-stone-900
            p-6
            text-white
            shadow-xl
            flex
            flex-col
          "
        >
          <h3 className="text-xl font-bold">
            {project.title}
          </h3>

          <p
            className="
              mt-4
              text-sm
              leading-6
              text-stone-300
              line-clamp-4
            "
          >
            {project.description}
          </p>

          {/* Technologies */}

          <div className="mt-5">
            <h4 className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Technologies
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    bg-white/10
                    px-3
                    py-1
                    text-xs
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}

          <div className="mt-5 flex-1">
            <h4 className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Features
            </h4>

            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              {project.features?.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2"
                >
                  <span className="text-amber-400">✓</span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub */}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-amber-500
                px-5
                py-2.5
                font-medium
                text-white
                transition
                hover:bg-amber-600
              "
            >
              <FaGithub size={18} />
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}