const LINKEDIN_URL = "https://www.linkedin.com/in/derek-helman-cfp%C2%AE-09775b188/";
const EDWARD_JONES_URL = "https://www.edwardjones.com/us-en/financial-advisor/derek-helman";
const OFFICE = {
  line1: "253 Aikens Center, Suite 3",
  line2: "Martinsburg, WV 25404",
  phone: "(304) 264-5916",
  tel: "+13042645916",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("253 Aikens Center Suite 3, Martinsburg, WV 25404"),
};

const highlights = [
  { value: "CFP®", label: "Certified Financial Planner™" },
  { value: "MBA", label: "Master of Business Administration" },
  { value: "Martinsburg", label: "Local office in WV" },
];

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

const experience = [
  { years: "2022 – Present", role: "Financial Advisor", firm: "Edward Jones", place: "Martinsburg, WV" },
  { years: "2021 – 2022", role: "Financial Advisor", firm: "Mission Financial Advisors", place: "" },
  { years: "2019 – 2021", role: "Financial Advisor", firm: "Merrill Lynch", place: "" },
];

const education = [
  { degree: "MBA", detail: "Master of Business Administration" },
  { degree: "Bachelor's degree", detail: "Shenandoah University" },
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-6 mt-16 text-sm uppercase tracking-[0.2em] text-white/50">{children}</h3>;
}

export function DerekSections() {
  return (
    <div className="relative bg-black text-[#efeeec]">
      <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
        <Eyebrow>About</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          Derek P. Helman, MBA, CFP®
        </h2>
        <p className="mt-2 text-lg text-white/60 md:text-xl">
          Financial Advisor · Edward Jones · Martinsburg, West Virginia
        </p>
        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-white/80 md:text-lg">
          <p>
            Derek is a CERTIFIED FINANCIAL PLANNER™ professional with an MBA, serving
            clients from his Edward Jones office in Martinsburg, WV.
          </p>
          <p>
            Before joining Edward Jones in 2022, he advised clients at Merrill Lynch and
            Mission Financial Advisors. He works with individuals and families to
            understand what matters most to them and build a financial strategy to match.
          </p>
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.value} className="bg-black p-6 md:p-8">
              <dt className="text-2xl font-semibold md:text-3xl">{h.value}</dt>
              <dd className="mt-1 text-sm text-white/60">{h.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="career" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
        <Eyebrow>Career</Eyebrow>
        <h2 className="text-3xl font-semibold md:text-5xl">Experience & credentials</h2>

        <SubHeading>Experience</SubHeading>
        <ol className="relative border-l border-white/15 pl-8">
          {experience.map((e, i) => (
            <li key={e.firm} className="relative pb-10 last:pb-0">
              <span
                className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 ${
                  i === 0 ? "border-white bg-white" : "border-white/40 bg-black"
                }`}
              />
              <p className="text-sm text-white/50">{e.years}</p>
              <p className="mt-1 text-xl font-semibold">{e.firm}</p>
              <p className="text-white/60">
                {e.role}
                {e.place && ` · ${e.place}`}
              </p>
            </li>
          ))}
        </ol>

        <SubHeading>Education</SubHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {education.map((ed) => (
            <li key={ed.degree} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xl font-semibold">{ed.degree}</p>
              <p className="mt-1 text-white/60">{ed.detail}</p>
            </li>
          ))}
        </ul>

        <SubHeading>Licenses & designations</SubHeading>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {credentials.map((c) => (
            <li key={c.label} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <span className="w-40 shrink-0 text-xl font-semibold">{c.label}</span>
              <span className="text-white/60">{c.detail}</span>
            </li>
          ))}
        </ul>
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

      <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="text-3xl font-semibold md:text-5xl">Let&apos;s talk</h2>
        <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
          Stop by the Martinsburg office or call to start a conversation about your goals.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <a
            href={OFFICE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 p-6 transition hover:border-white/40"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Office</p>
            <p className="mt-3 text-lg font-semibold">{OFFICE.line1}</p>
            <p className="text-white/70">{OFFICE.line2}</p>
            <p className="mt-4 text-sm text-white/50 group-hover:text-white">Get directions →</p>
          </a>
          <a
            href={`tel:${OFFICE.tel}`}
            className="group rounded-2xl border border-white/10 p-6 transition hover:border-white/40"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Phone</p>
            <p className="mt-3 text-lg font-semibold">{OFFICE.phone}</p>
            <p className="mt-4 text-sm text-white/50 group-hover:text-white">Call the office →</p>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={EDWARD_JONES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-transparent hover:text-white"
          >
            Edward Jones profile
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border-2 border-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
          >
            Connect on LinkedIn
          </a>
        </div>
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
