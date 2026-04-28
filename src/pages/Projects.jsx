import { useOutletContext } from "react-router";
import { useMemo } from "react";
import { PROJECTS } from "../components/DummyData";
import { ProjectCard, SectionHeader } from "../components";

const Projects = () => {
  const { mode } = useOutletContext();
  const filtered = useMemo(
    () =>
      mode === "all" ? PROJECTS : PROJECTS?.filter((p) => p?.type === mode),
    [mode],
  );
  console.log(PROJECTS);
  console.log("Filtered", filtered);
  console.log("mode:", mode);
  return (
    <div className="w-full fade-up">
      <SectionHeader
        kicker="work"
        title="Selected Projects"
        sub="Use the filter in the top bar to switch between Web2, Web3, or All."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        {filtered?.map((p) => (
          <ProjectCard key={p?.id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
