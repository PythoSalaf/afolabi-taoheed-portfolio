import { Profile } from "../assets";
import { LuMapPin, LuBriefcase } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa6";
import { LuMail, LuDownload } from "react-icons/lu";
import { GiCoffeeCup } from "react-icons/gi";
import { PROFILE } from "../components/DummyData";
import { SectionHeader } from "../components";
import { Link } from "react-router";

function Card({ children, className = "" }) {
  return <div className={`glass rounded-xl p-5 ${className}`}>{children}</div>;
}

const About = () => {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-[260px_1fr] gap-6 fade-up">
        <Card className="text-center">
          <div className="relative mx-auto overflow-hidden shadow-lg size-40 rounded-2xl ring-2 ring-web3/40">
            <div className="absolute inset-0 bg-linear-to-br from-web2/30 to-web3/30" />
            <img
              src={Profile}
              alt={`Portrait of ${PROFILE.name}`}
              width={512}
              height={512}
              loading="lazy"
              className="relative object-cover size-full"
            />
          </div>
          <div className="mt-4 font-semibold font-display">{PROFILE.name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {PROFILE.role}
          </div>
          <div className="inline-flex items-center gap-1 mt-3 text-xs text-muted-foreground">
            <LuMapPin className="size-3" /> {PROFILE.location}
          </div>
          <div className="pt-4 mt-4 space-y-2 text-xs text-left border-t border-border/60">
            <div className="flex items-center gap-2 text-muted-foreground">
              <LuBriefcase className="size-3.5 text-web2" /> Open to work
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FaGlobe className="size-3.5 text-web3" /> EN · YO · PT
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <GiCoffeeCup className="size-3.5 text-(--warning)" /> Powered by
              coffee
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <LuMail className="size-3.5" /> {PROFILE.email}
            </div>
          </div>
        </Card>
        <Card>
          <SectionHeader kicker="about" title="A bit about me" />
          <p className="text-muted-foreground">{PROFILE.bio}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Web2 frontend apps with React & Next.js",
              "Web3 dApps and smart contract integration",
              "DeFi dashboards & NFT platforms",
              "Design systems and component libraries",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2">
                <span className="mt-1 size-1.5 rounded-full bg-linear-to-r from-web2 to-web3" />
                {x}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "Open Source",
              "DeFi",
              "NFTs",
              "Design Systems",
              "Hackathons",
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-full border bg-card/60"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href="/taoheed-afolabi-resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 mt-6 text-sm font-semibold border rounded-lg hover:bg-accent"
          >
            <LuDownload className="size-4" /> Download Resume
          </a>
        </Card>
      </div>
    </div>
  );
};

export default About;
