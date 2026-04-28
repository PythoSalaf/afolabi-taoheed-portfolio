import { useState } from "react";
import { LuSend, LuCalendar, LuLoader, LuMail, LuMapPin } from "react-icons/lu";
import { SectionHeader } from "../components";
import { PROFILE } from "../components/DummyData";

function Card({ children, className = "" }) {
  return <div className={`glass rounded-xl p-5 ${className}`}>{children}</div>;
}

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setToast(true);
      e.target.reset();
      setTimeout(() => setToast(false), 3000);
    }, 1200);
  };
  return (
    <div className="w-full grid md:grid-cols-[1fr_320px] gap-6 mb-3 fade-up">
      <Card>
        <SectionHeader
          kicker="say hi"
          title="Get in touch"
          sub="I'm currently open to freelance and full-time roles."
        />
        <form onSubmit={submit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              className="w-full bg-background/40 border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full bg-background/40 border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <select className="w-full bg-background/40 border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option>Job Offer</option>
            <option>Collaboration</option>
            <option>General Inquiry</option>
          </select>
          <textarea
            required
            rows={5}
            placeholder="Your message…"
            className="w-full bg-background/40 border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
          <button
            disabled={sending}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-linear-to-r from-web2 to-web3 disabled:opacity-60 cursor-pointer"
          >
            {sending ? (
              <>
                <LuLoader className="size-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                <LuSend className="size-4" /> Send Message
              </>
            )}
          </button>
        </form>
      </Card>

      <div className="space-y-4">
        <Card>
          <div className="text-[11px] font-mono text-muted-foreground">
            contact
          </div>
          <div className="mt-2 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <LuMail className="size-4 text-muted-foreground" />
              {PROFILE.email}
            </div>
            <div className="flex items-center gap-2">
              <LuMapPin className="size-4 text-muted-foreground" />
              {PROFILE.location}
            </div>
            <div className="flex items-center gap-2">
              <LuCalendar className="size-4 text-muted-foreground" />
              Replies within 24h
            </div>
          </div>
        </Card>
        <button className="flex items-center justify-center w-full gap-2 p-4 text-sm font-semibold glass rounded-xl hover:bg-card-hover">
          <LuCalendar className="size-4" /> Book a Call
        </button>
      </div>

      {toast && (
        <div className="fixed z-50 px-4 py-3 text-sm border-l-4 rounded-lg bottom-6 right-6 glass border-success fade-up">
          ✓ Message sent — I'll be in touch soon.
        </div>
      )}
    </div>
  );
};

export default Contact;
