import { SectionHeader } from "../components";
import { POSTS } from "../components/DummyData";

const Blog = () => {
  return (
    <div className="w-full mb-6 fade-up">
      <SectionHeader
        kicker="writing"
        title="Blog & Articles"
        sub="Notes from shipping production frontends in Web2 and Web3."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {POSTS.map((p) => {
          const color =
            p.category === "Web3"
              ? "var(--web3)"
              : p.category === "Web2"
                ? "var(--web2)"
                : "var(--warning)";
          return (
            <div
              key={p.title}
              className="overflow-hidden transition glass rounded-xl hover:-translate-y-1"
            >
              <div
                className="h-28"
                style={{
                  background: `linear-gradient(135deg, color-mix(in oklab, ${color} 35%, transparent), transparent)`,
                }}
              />
              <div className="p-5">
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded text-white"
                  style={{ backgroundColor: color }}
                >
                  {p.category}
                </span>
                <h3 className="mt-3 font-semibold font-display">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {p.excerpt}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                  <span>{p.read} read</span>
                  <button className="font-mono text-sm cursor-pointer text-gradient">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
