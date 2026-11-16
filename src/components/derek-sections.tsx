const LINKEDIN_URL = "https://www.linkedin.com/in/derek-helman-cfp%C2%AE-09775b188/";

const services = [
  {
    title: "Retirement planning",
    body: "Building a plan for when you want to retire, how much you'll need, and how to turn savings into income.",
  },
  {
    title: "Investment guidance",
    body: "A portfolio built around your goals, timeline and comfort with risk, reviewed as life changes.",
  },
  {
    title: "Education savings",
    body: "Strategies to help you save for a child's or grandchild's education.",
  },
  {
    title: "Estate & legacy",
    body: "Working alongside your attorney and tax professional on the legacy you want to leave.",
  },
];

const credentials = [
  { label: "CFP®", detail: "CERTIFIED FINANCIAL PLANNER™ professional" },
  { label: "Series 63", detail: "Uniform Securities Agent State Law Exam" },
  { label: "Series 66", detail: "Uniform Combined State Law Exam" },
  { label: "West Virginia", detail: "Registered to provide investment advice" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/50 md:text-sm">
      {children}
    </p>
  );
}

export function DerekSections() {
  return (
    <div className="relative bg-black text-[#efeeec]">
      <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
        <Eyebrow>About</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          Derek Paul Helman, CFP®
        </h2>
        <p className="mt-2 text-lg text-white/60 md:text-xl">
          Financial Advisor · Edward Jones · Martinsburg, West Virginia
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Derek is a CERTIFIED FINANCIAL PLANNER™ professional with Edward Jones in
          Martinsburg, WV. He works with individuals and families in the Eastern
          Panhandle to understand what matters most to them and build a financial
          strategy to match.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
        <Eyebrow>Services</Eyebrow>
        <h2 className="text-3xl font-semibold md:text-5xl">How Derek can help</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="bg-black p-8">
              <h3 className="text-lg font-semibold md:text-xl">{s.title}</h3>
              <p className="mt-3 text-white/60">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="credentials" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
        <Eyebrow>Credentials</Eyebrow>
        <h2 className="text-3xl font-semibold md:text-5xl">Licenses & designations</h2>
        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {credentials.map((c) => (
            <li key={c.label} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <span className="w-40 shrink-0 text-xl font-semibold">{c.label}</span>
              <span className="text-white/60">{c.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="text-3xl font-semibold md:text-5xl">Let&apos;s talk</h2>
        <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
          Based in Martinsburg, West Virginia. Reach out to start a conversation about
          your goals.
        </p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-transparent hover:text-white"
        >
          Connect on LinkedIn
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 pb-20 pt-10 text-center text-xs leading-relaxed text-white/40">
        <p>Derek Helman is a Financial Advisor with Edward Jones. Edward Jones, Member SIPC.</p>
        <p className="mt-2">
          Parallax resource by{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://www.osmo.supply/" className="underline">
            Osmo
          </a>
        </p>
      </footer>
    </div>
  );
}
