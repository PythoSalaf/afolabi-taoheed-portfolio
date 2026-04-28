import { SectionHeader } from "../components";
import { EXPERIENCE } from "../components/DummyData";

function Card({ children, className = "" }) {
  return <div className={`glass rounded-xl p-5 ${className}`}>{children}</div>;
}

const Experience = () => {
  return (
    <div className="w-full mb-5 fade-up">
      <SectionHeader kicker="career" title="Experience" />
      <div className="relative pl-6 md:pl-0">
        <div className="absolute top-0 bottom-0 w-px md:left-1/2 left-2 bg-border" />
        <div className="space-y-8">
          {EXPERIENCE.map((e, i) => {
            const isRight = i % 2 === 1;
            return (
              <div
                key={i}
                className="relative md:grid md:grid-cols-2 md:gap-10"
              >
                <div className="absolute z-10 -translate-x-1/2 rounded-full md:left-1/2 left-2 top-3 size-3 bg-linear-to-r from-web2 to-web3 ring-4 ring-background" />
                <Card
                  className={`ml-6 md:ml-0 ${isRight ? "md:col-start-2 md:ml-6" : "md:col-start-1 md:mr-6"}`}
                >
                  <div className="text-[11px] font-mono text-muted-foreground">
                    {e.duration} · {e.location}
                  </div>
                  <h3 className="mt-1 font-semibold font-display">{e.role}</h3>
                  <div className="text-sm font-medium text-gradient">
                    {e.company}
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded border bg-card/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

// import { SectionHeader } from "../components";
// import { EXPERIENCE } from "../components/DummyData";

// function Card({ children, className = "" }) {
//   return (
//     <div className={`glass rounded-xl p-5 ${className}`}>
//       {children}
//     </div>
//   );
// }

// const Experience = () => {
//   return (
//     <div className="w-full fade-up">
//       <SectionHeader kicker="career" title="Experience" />

//       <div className="relative">
//         {/* Hidden on mobile */}
//         <div className="absolute top-0 bottom-0 hidden w-px md:block md:left-1/2 bg-border" />

//         <div className="space-y-8">
//           {EXPERIENCE.map((e, i) => {
//             const isRight = i % 2 === 1;

//             return (
//               <div
//                 key={i}
//                 className="relative md:grid md:grid-cols-2 md:gap-10"
//               >
//                 {/* Hidden on mobile */}
//                 <div className="
//                   absolute top-3 hidden md:block
//                   md:left-1/2 -translate-x-1/2
//                   size-3 rounded-full
//                   bg-gradient-to-r
//                   from-[color:var(--web2)]
//                   to-[color:var(--web3)]
//                   ring-4 ring-background z-10
//                 " />

//                 <Card
//                   className={`
//                     mx-auto w-full max-w-xl
//                     md:max-w-none
//                     ${
//                       isRight
//                         ? "md:col-start-2 md:ml-6"
//                         : "md:col-start-1 md:mr-6"
//                     }
//                   `}
//                 >
//                   <div className="text-[11px] font-mono text-muted-foreground">
//                     {e.duration} · {e.location}
//                   </div>

//                   <h3 className="mt-1 font-semibold font-display">
//                     {e.role}
//                   </h3>

//                   <div className="text-sm font-medium text-gradient">
//                     {e.company}
//                   </div>

//                   <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
//                     {e.bullets.map((b) => (
//                       <li key={b} className="flex gap-2">
//                         <span>›</span>
//                         {b}
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="mt-3 flex flex-wrap gap-1.5">
//                     {e.tags.map((t) => (
//                       <span
//                         key={t}
//                         className="rounded border bg-card/60 px-2 py-0.5 text-[10px] font-mono"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </Card>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
