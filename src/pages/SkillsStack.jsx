import { useState } from "react";
import { SKILLS } from "./../components/DummyData";
import { SectionHeader } from "../components";

const SkillsStack = () => {
  const TAB_ACCENTS = {
    "Web2 Frontend": { hex: "#06B6D4", name: "cyan" },
    "Web3 / Blockchain": { hex: "#8B5CF6", name: "violet" },
    "Tools & DevOps": { hex: "#10B981", name: "emerald" },
  };

  const [tab, setTab] = useState("Web2 Frontend");
  const cats = Object.keys(SKILLS);
  const accent = TAB_ACCENTS[tab].hex;

  return (
    <div className="w-full fade-up">
      <SectionHeader
        kicker="stack"
        title="Skills & Tooling"
        sub="What I reach for daily, organized by domain."
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {cats.map((c) => {
          const isActive = tab === c;
          const tabAccent = TAB_ACCENTS[c].hex;
          return (
            <button
              key={c}
              onClick={() => setTab(c)}
              className="px-3.5 py-1.5 text-xs font-mono cursor-pointer rounded-md border transition-all"
              style={
                isActive
                  ? {
                      backgroundColor: `color-mix(in oklab, ${tabAccent} 18%, transparent)`,
                      borderColor: `color-mix(in oklab, ${tabAccent} 60%, transparent)`,
                      color: tabAccent,
                      boxShadow: `0 0 0 1px color-mix(in oklab, ${tabAccent} 30%, transparent), 0 8px 24px -12px ${tabAccent}`,
                    }
                  : undefined
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      <div
        key={tab}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 animate-fade-in mb-6"
      >
        {SKILLS[tab].map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="group relative flex cursor-default flex-col items-center rounded-xl p-5 text-center transition-all duration-300 hover:scale-[1.05]"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `color-mix(in oklab, ${accent} 60%, transparent)`;
                e.currentTarget.style.boxShadow = `
          0 0 0 1px color-mix(in oklab, ${accent} 25%, transparent),
          0 12px 40px -12px ${accent}
        `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="mb-3 grid size-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(
            135deg,
            color-mix(in oklab, ${accent} 18%, transparent),
            color-mix(in oklab, ${accent} 4%, transparent)
          )`,
                  border: `1px solid color-mix(in oklab, ${accent} 25%, transparent)`,
                }}
              >
                <Icon className="size-5" style={{ color: accent }} />
              </div>

              <div className="text-sm font-semibold leading-tight">
                {skill.name}
              </div>

              <div className="mt-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                {skill.category}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsStack;
