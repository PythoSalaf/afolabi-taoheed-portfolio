import { FaAward } from "react-icons/fa6";
import { SectionHeader } from "../components";
import { CERTS } from "../components/DummyData";

function Card({ children, className = "" }) {
  return <div className={`glass rounded-xl p-5 ${className}`}>{children}</div>;
}

const Education = () => {
  return (
    <div className="w-full space-y-6 fade-up">
      <div>
        <SectionHeader kicker="education" title="Academic Background" />
        <Card>
          <div className="text-[11px] font-mono text-muted-foreground">
            2019 — 2025
          </div>
          <h3 className="mt-1 font-semibold font-display">
            B.Tech. Physics Electronics
          </h3>
          <div className="text-sm text-gradient">
            Federal University of Technology Akure (FUTA)
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {[
              "Algorithms",
              "Distributed Systems",
              "Cryptography",
              "HCI",
              "Compilers",
            ].map((t) => (
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

      <div>
        <SectionHeader kicker="credentials" title="Certifications" />
        <div className="grid gap-4 mb-7 md:grid-cols-2">
          {CERTS.map((c) => (
            <Card key={c.name} className="flex items-start gap-4">
              <div className="grid rounded-lg size-10 place-items-center bg-linear-to-br from-web2/20 to-web3/20">
                <FaAward className="text-white size-5 " />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">{c.name}</h4>
                <div className="text-xs text-muted-foreground">
                  {c.issuer} · {c.date}
                </div>
                <button className="mt-2 font-mono text-xs text-gradient">
                  View Credential →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
