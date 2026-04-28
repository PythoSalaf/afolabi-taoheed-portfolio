import { useEffect, useState } from "react";
import { PROFILE, PROJECTS, STATS } from "../components/DummyData";
import { useNavigate, useOutletContext } from "react-router";
import { ProjectCard, SectionHeader } from "../components";

function Card({ children, className = "" }) {
  return <div className={`glass rounded-xl p-5 ${className}`}>{children}</div>;
}

function Typed({ text }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= text.length) return;
    const t = setTimeout(() => setN(n + 1), 40);
    return () => clearTimeout(t);
  }, [n, text]);
  return (
    <span>
      {text.slice(0, n)}
      <span className="caret">|</span>
    </span>
  );
}

const Home = () => {
  const navigate = useNavigate();
  const { mode } = useOutletContext();
  const accentClass = (mode) =>
    mode === "web2"
      ? "from-[color:var(--web2)] to-[color:var(--web2)]"
      : mode === "web3"
        ? "from-[color:var(--web3)] to-[color:var(--web3)]"
        : "from-[color:var(--web2)] to-[color:var(--web3)]";

  return (
    <div className="w-full space-y-6 fade-up">
      <Card className="relative overflow-hidden">
        <div
          className={`absolute -top-32 -right-32 size-80 rounded-full blur-3xl opacity-40 bg-linear-to-br ${accentClass(mode)}`}
        />
        <div className="relative">
          <div className="text-[11px] font-mono text-muted-foreground">
            $ whoami
          </div>
          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl font-display">
            <Typed text={`Hello, I'm ${PROFILE.name} — ${PROFILE.role}`} />
          </h1>
          <p className="max-w-4xl mt-4 text-muted-foreground">{PROFILE.bio}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            <button
              onClick={() => navigate("/projects")}
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg cursor-pointer bg-linear-to-r from-web2 to-web3"
            >
              View Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-4 py-2 text-sm font-semibold border rounded-lg cursor-pointer hover:bg-accent"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <Card key={s.label}>
            <div className="text-3xl font-bold font-display text-gradient">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </Card>
        ))}
      </div>
      <div>
        <SectionHeader kicker="pinned" title="Featured Projects" />
        <div className="grid gap-4 md:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
      <div className="mb-5">
        <Card>
          <div className="text-[11px] md:text-sm font-mono text-muted-foreground mb-4 capitalize">
            tech stack
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Wagmi",
              "Viem",
              "Ethers.js",
              "GraphQL",
              "IPFS",
              "Solidity",
              "Rust",
            ].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2.5 py-1 rounded-md border bg-card/60"
              >
                {t}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
