import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router";

const ProjectCard = ({ p }) => {
  const accent = p?.type === "web2" ? "var(--web2)" : "var(--web3)";
  const Icon = p?.icon;

  return (
    <div className="group glass rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:border-[color:var(--ring)]">
      {/* Top Section */}
      <div
        className="relative grid h-32 text-5xl place-items-center"
        style={{
          background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 30%, transparent), color-mix(in oklab, ${accent} 5%, transparent))`,
        }}
      >
        <div>
          <Icon />
        </div>

        <span
          className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-full text-white"
          style={{
            backgroundColor: `color-mix(in oklab, ${accent} 80%, black)`,
          }}
        >
          {p?.type.toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold font-display">{p?.title}</h3>

        <p className="mt-1 text-sm text-muted-foreground">{p?.desc}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p?.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded border bg-card/60"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-4 text-xs text-muted-foreground">
          <Link
            to={`${p.githubUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            <FaGithub className="w-3.5 h-3.5" />
            Code
          </Link>

          <Link
            to={`${p?.liveUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            <FiExternalLink className="w-3.5 h-3.5" />
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
