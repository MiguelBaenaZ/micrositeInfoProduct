import { useState, useEffect } from "react";
import {
  Shield, Clock, Award, Globe, Truck, DollarSign,
  BookOpen, FileText, Plane, Building2, Star, Check, X
} from "lucide-react";

const FONT_DISPLAY = "'Barlow Condensed', sans-serif";
const FONT_BODY = "'DM Sans', sans-serif";

const IMG_HERO = "https://images.unsplash.com/photo-1680463990599-9d318aaecf71?w=1400&h=900&fit=crop&auto=format";
const IMG_MINING = "https://images.unsplash.com/photo-1523848309072-c199db53f137?w=1400&h=800&fit=crop&auto=format";
const IMG_OUTBACK = "https://images.unsplash.com/photo-1587882740564-e0380e0dc12a?w=1200&h=700&fit=crop&auto=format";
const IMG_WORKER = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=1000&fit=crop&auto=format";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-primary text-xs uppercase tracking-[0.18em] mb-5 font-semibold"
      style={{ fontFamily: FONT_DISPLAY }}
    >
      {children}
    </p>
  );
}

function CTAButton({
  children,
  size = "md",
  fullWidth = false,
}: {
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
  fullWidth?: boolean;
}) {
  const sizes = {
    md: "py-4 px-8 text-lg",
    lg: "py-5 px-10 text-xl",
    xl: "py-6 px-12 text-2xl",
  };
  return (
    <a
      href="https://hotmart.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-accent text-accent-foreground font-black uppercase tracking-wider transition-all duration-150 hover:brightness-110 active:scale-[0.98] cursor-pointer select-none ${sizes[size]} ${fullWidth ? "w-full text-center" : ""}`}
      style={{ fontFamily: FONT_DISPLAY, letterSpacing: "0.07em", minHeight: "50px" }}
    >
      {children}
    </a>
  );
}

const benefits = [
  {
    icon: <DollarSign size={26} />,
    label: "Real salary",
    figure: "80K–120K AUD",
    desc: "The average salary for a heavy machinery operator in Australia. No bonuses or overtime included.",
  },
  {
    icon: <Award size={26} />,
    label: "No degree needed",
    figure: "0 academic requirements",
    desc: "It doesn't matter if you left school at 16. What counts is your drive to work.",
  },
  {
    icon: <Truck size={26} />,
    label: "Master the machine",
    figure: "Full control",
    desc: "You'll learn exactly which certifications you need and how to get them before you arrive.",
  },
  {
    icon: <Globe size={26} />,
    label: "Lifestyle",
    figure: "Real freedom",
    desc: "Australia. Space, sun, nature and a work culture where you're valued for what you produce.",
  },
];

const steps = [
  {
    num: "01",
    icon: <Award size={18} />,
    title: "Certifications you need",
    desc: "Which licences Australia recognises, how to obtain them in Germany or after arrival, and which ones open the most doors in mining.",
  },
  {
    num: "02",
    icon: <BookOpen size={18} />,
    title: "The English level you actually need",
    desc: "You don't have to be fluent. We show you the real minimum level and the resources to reach it in 60 days.",
  },
  {
    num: "03",
    icon: <Plane size={18} />,
    title: "Visa process step by step",
    desc: "Working Holiday, Subclass 482, Subclass 186. Which one applies to your situation and how to apply without an agency.",
  },
  {
    num: "04",
    icon: <Building2 size={18} />,
    title: "Companies hiring right now",
    desc: "An updated list of the top Australian mining companies with open processes for international candidates.",
  },
  {
    num: "05",
    icon: <FileText size={18} />,
    title: "Resume + land a job in 6 months",
    desc: "How to format your resume the Australian way, plus a week-by-week plan to have an offer before you board the plane.",
  },
];

const testimonials = [
  {
    name: "Lukas M.",
    age: 26,
    city: "Dortmund, Germany",
    before: "€1,800/mo",
    after: "7,200 AUD/mo",
    role: "Bulldozer Operator · Pilbara, WA",
    quote:
      "I spent 4 years at the same logistics company going nowhere. I used this guide, and within 5 months I had a visa and a job offer. Today I earn more than I ever imagined back in Germany.",
  },
  {
    name: "Kevin H.",
    age: 29,
    city: "Leipzig, Germany",
    before: "€2,100/mo",
    after: "8,900 AUD/mo",
    role: "Mining Truck Operator · Queensland",
    quote:
      "I thought that without a degree I had no options outside of Germany. This guide proved me wrong. The visa process went perfectly following the steps laid out.",
  },
];

const salaries = [
  { role: "Mining Truck Operator", min: "85,000", max: "110,000" },
  { role: "Excavator / Bulldozer Operator", min: "90,000", max: "125,000" },
  { role: "Drill Rig Operator", min: "95,000", max: "130,000" },
];

const noNeeds = [
  "A university degree",
  "Previous mining experience",
  "Advanced English (C1/C2)",
  "Large savings",
  "Contacts in Australia",
];

const yesNeeds = [
  "Basic English (A2/B1 is enough)",
  "A real motivation to change",
  "Willingness to learn",
  "€3,000–5,000 in initial savings",
  "This guide and following the plan",
];

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShowSticky(window.scrollY > window.innerHeight * 0.88);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ fontFamily: FONT_BODY }} className="bg-background text-foreground overflow-x-hidden">

      {/* ── STICKY BOTTOM CTA ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3">
          <CTAButton size="lg" fullWidth>
            GET THE GUIDE — €47 →
          </CTAButton>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        {/* Background */}
        <div className="absolute inset-0 bg-background">
          <img
            src={IMG_HERO}
            alt="Yellow excavator in an open-pit mine, Australia"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0A0A0A 30%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.2) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-xl mx-auto w-full lg:max-w-4xl">
          {/* Tag */}
          <div
            className="inline-block mb-7 px-3 py-1 border border-primary/50 text-primary text-xs uppercase tracking-[0.18em] font-semibold"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            Digital Guide · Work in Australia
          </div>

          {/* Headline */}
          <h1
            className="font-black uppercase leading-[0.92] text-white mb-7"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(3.5rem, 14vw, 8rem)" }}
          >
            YOUR LIFE<br />
            <span className="text-primary">IS WORTH</span><br />
            MORE THAN THIS.
          </h1>

          {/* Sub */}
          <p className="text-white/75 mb-10 max-w-lg leading-relaxed" style={{ fontSize: "1.125rem" }}>
            Work in mining and heavy machinery in Australia.{" "}
            <strong className="text-white">No university degree required.</strong> Salaries up to{" "}
            <strong className="text-primary">120,000 AUD</strong> per year.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <CTAButton size="lg">GET THE GUIDE — €47</CTAButton>
            <div className="flex items-center gap-2 text-white/45 text-sm self-center">
              <Shield size={14} className="text-primary shrink-0" />
              <span>Instant access · 30-day guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. PROBLEMA → SOLUCIÓN
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-xl mx-auto lg:max-w-4xl space-y-16">

          {/* Pain */}
          <div className="border-l-[3px] border-white/15 pl-7">
            <Label>The reality</Label>
            <h2
              className="font-black uppercase leading-tight text-white mb-6"
              style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.2rem, 7vw, 3.5rem)" }}
            >
              Still stuck in the<br />same job as always?
            </h2>
            <div className="space-y-4 text-white/65 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
              <p>Same salary. Same routines. Same excuses that "things are tough out there".</p>
              <p>You don't have a university degree. And in Germany, that feels like an unbreakable glass ceiling.</p>
              <p className="text-white/90 font-medium">But there's something nobody is telling you.</p>
            </div>
          </div>

          {/* Break question */}
          <div className="bg-card border border-primary/25 p-8 md:p-12">
            <Label>The question that changes everything</Label>
            <h2
              className="font-black uppercase leading-tight text-white"
              style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.4rem, 8vw, 4.5rem)" }}
            >
              What if in 6 months<br />you were already in{" "}
              <span className="text-primary">Australia</span><br />
              earning twice as much?
            </h2>
          </div>

          {/* Solution */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Label>The twist</Label>
              <h3
                className="font-black uppercase leading-tight text-white mb-5"
                style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 6vw, 3rem)" }}
              >
                Australia doesn't ask for{" "}
                <span className="text-primary">degrees.</span><br />
                It asks for skills.
              </h3>
              <p className="text-white/65 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
                The Australian mining industry hires thousands of operators every year. They don't care if you have a master's degree. They care if you can run the machine and want to work.
              </p>
            </div>
            <div className="relative overflow-hidden bg-secondary">
              <img
                src={IMG_OUTBACK}
                alt="Open Australian landscape seen from the air"
                className="w-full h-60 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. BENEFICIOS
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-card">
        <div className="max-w-xl mx-auto lg:max-w-4xl">
          <Label>Why it works</Label>
          <h2
            className="font-black uppercase leading-tight text-white mb-14"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.2rem, 7vw, 3.5rem)" }}
          >
            What you get<br />with this guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-background border border-border p-8 group hover:border-primary/40 transition-colors duration-200"
              >
                <div className="text-primary mb-5">{b.icon}</div>
                <p
                  className="text-muted-foreground text-[11px] uppercase tracking-[0.18em] mb-2 font-semibold"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  {b.label}
                </p>
                <p
                  className="text-white font-black uppercase mb-3"
                  style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
                >
                  {b.figure}
                </p>
                <p className="text-white/55 leading-relaxed text-[0.9375rem]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. QUÉ APRENDERÁS
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-xl mx-auto lg:max-w-4xl">
          <Label>The content</Label>
          <h2
            className="font-black uppercase leading-tight text-white mb-14"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.2rem, 7vw, 3.5rem)" }}
          >
            What you'll learn<br />in the guide
          </h2>

          <div>
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex gap-6 md:gap-10 py-8 border-b border-border group last:border-0"
              >
                <div
                  className="text-[3.5rem] md:text-[4.5rem] font-black leading-none text-white/8 shrink-0 w-14 md:w-20 group-hover:text-primary/20 transition-colors duration-200 select-none"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  {s.num}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary">{s.icon}</span>
                    <h3
                      className="text-white font-black uppercase"
                      style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.1rem, 3.5vw, 1.4rem)" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-white/55 leading-relaxed text-[0.9375rem]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. TESTIMONIOS
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-card">
        <div className="max-w-xl mx-auto lg:max-w-4xl">
          <Label>They already did it</Label>
          <h2
            className="font-black uppercase leading-tight text-white mb-14"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.2rem, 7vw, 3.5rem)" }}
          >
            Real proof
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background border border-border p-8 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/75 leading-relaxed mb-8 flex-1 text-[0.9375rem]">
                  "{t.quote}"
                </p>

                {/* Transformation bar */}
                <div className="flex items-stretch gap-0 mb-6 border border-border">
                  <div className="flex-1 px-4 py-4 border-r border-border text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-2" style={{ fontFamily: FONT_DISPLAY }}>
                      Before
                    </p>
                    <p
                      className="font-black text-white/35 line-through leading-none"
                      style={{ fontFamily: FONT_DISPLAY, fontSize: "1.25rem" }}
                    >
                      {t.before}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 text-primary text-xl font-black" style={{ fontFamily: FONT_DISPLAY }}>
                    →
                  </div>
                  <div className="flex-1 px-4 py-4 border-l border-border text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-2" style={{ fontFamily: FONT_DISPLAY }}>
                      Now
                    </p>
                    <p
                      className="font-black text-primary leading-none"
                      style={{ fontFamily: FONT_DISPLAY, fontSize: "1.25rem" }}
                    >
                      {t.after}
                    </p>
                  </div>
                </div>

                {/* ID */}
                <div>
                  <p className="text-white font-bold text-base" style={{ fontFamily: FONT_DISPLAY }}>
                    {t.name}, {t.age} years old
                  </p>
                  <p className="text-muted-foreground text-sm">{t.city}</p>
                  <p
                    className="text-primary uppercase mt-1"
                    style={{ fontFamily: FONT_DISPLAY, fontSize: "0.68rem", letterSpacing: "0.12em" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. SALARIOS
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-primary">
        <div className="max-w-xl mx-auto lg:max-w-4xl">
          <p
            className="text-[#0A0A0A]/50 text-xs uppercase tracking-[0.18em] mb-5 font-semibold"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            What Australia pays
          </p>
          <h2
            className="font-black uppercase leading-tight text-[#0A0A0A] mb-14"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.2rem, 7vw, 3.5rem)" }}
          >
            Real salaries.<br />No fluff.
          </h2>

          <div>
            {salaries.map((s, i) => (
              <div
                key={i}
                className="py-8 border-b border-[#0A0A0A]/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 last:border-0"
              >
                <div>
                  <p
                    className="text-[#0A0A0A]/50 text-[11px] uppercase tracking-[0.15em] mb-1.5 font-semibold"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    0{i + 1}
                  </p>
                  <p
                    className="text-[#0A0A0A] font-bold"
                    style={{ fontFamily: FONT_DISPLAY, fontSize: "1.2rem" }}
                  >
                    {s.role}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className="text-[#0A0A0A] font-black leading-none"
                    style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.8rem, 8vw, 4.5rem)" }}
                  >
                    {s.min}–{s.max}
                  </p>
                  <p
                    className="text-[#0A0A0A]/50 uppercase tracking-[0.15em] mt-1"
                    style={{ fontFamily: FONT_DISPLAY, fontSize: "0.72rem" }}
                  >
                    AUD / year
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#0A0A0A]/40 text-xs mt-10">
            * Source: SEEK Australia / Indeed AU · 2024 data. Does not include bonuses or overtime.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. NO NECESITAS vs SÍ NECESITAS
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-xl mx-auto lg:max-w-4xl">
          <Label>Clear the doubts</Label>
          <h2
            className="font-black uppercase leading-tight text-white mb-14"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.2rem, 7vw, 3.5rem)" }}
          >
            The truth about<br />the requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* No necesitas */}
            <div className="bg-card border border-border p-8">
              <p
                className="text-white/40 text-xs uppercase tracking-[0.18em] mb-7 font-semibold"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                ❌ You don't need
              </p>
              <div className="space-y-4">
                {noNeeds.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <X size={16} className="text-red-500/80 shrink-0" />
                    <span className="text-white/50 text-[0.9375rem]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sí necesitas */}
            <div className="bg-card border border-primary/35 p-8">
              <p
                className="text-primary text-xs uppercase tracking-[0.18em] mb-7 font-semibold"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                ✅ You do need
              </p>
              <div className="space-y-4">
                {yesNeeds.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-primary shrink-0" />
                    <span className="text-white text-[0.9375rem]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. CTA FINAL
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 md:py-44 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-background">
          <img
            src={IMG_MINING}
            alt="Large-scale mining operation in Australia"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0A0A0A, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0.85) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-xl mx-auto lg:max-w-4xl text-center">
          <Label>The time is now</Label>
          <h2
            className="font-black uppercase leading-[0.92] text-white mb-7"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(3rem, 12vw, 7rem)" }}
          >
            ONE STEP.<br />
            <span className="text-primary">ONE DECISION.</span><br />
            ONE DIFFERENT YEAR.
          </h2>

          <p className="text-white/55 mb-14 max-w-md mx-auto leading-relaxed" style={{ fontSize: "1.0625rem" }}>
            The guide you need to go from Germany to Australia with a mining job. The whole process, explained straight.
          </p>

          {/* Price card */}
          <div className="inline-block w-full max-w-md mx-auto mb-10">
            <div className="bg-card border border-border px-8 py-10 text-center">
              <p
                className="text-muted-foreground text-xs uppercase tracking-[0.18em] mb-5 font-semibold"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                Full access · One-time payment
              </p>

              <div className="flex items-end justify-center gap-4 mb-2">
                <span
                  className="text-white/25 font-black line-through leading-none"
                  style={{ fontFamily: FONT_DISPLAY, fontSize: "2rem" }}
                >
                  €97
                </span>
                <span
                  className="text-white font-black leading-none"
                  style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(4rem, 12vw, 6rem)" }}
                >
                  €47
                </span>
              </div>
              <p className="text-primary text-sm font-semibold mb-8">Launch price</p>

              <CTAButton size="xl" fullWidth>
                BUY NOW →
              </CTAButton>

              {/* Trust row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-7 text-white/35 text-xs">
                <div className="flex items-center gap-1.5">
                  <Shield size={12} className="text-primary" />
                  <span>30-day guarantee</span>
                </div>
                <div className="w-px h-3 bg-white/15 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-primary" />
                  <span>Instant access</span>
                </div>
                <div className="w-px h-3 bg-white/15 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <Award size={12} className="text-primary" />
                  <span>100% secure payment</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white/25 text-sm max-w-xs mx-auto">
            If you're not satisfied within 30 days, we'll refund you in full. No questions asked.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border bg-[#050505]">
        <div className="max-w-xl mx-auto lg:max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p
                className="text-white font-black uppercase text-xl"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                Work in <span className="text-primary">Australia</span>
              </p>
              <p className="text-muted-foreground text-sm mt-0.5">
                Digital Guide · Mining & Heavy Machinery
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-white transition-colors duration-150">
                Privacy policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-150">
                Terms & conditions
              </a>
              <a
                href="mailto:info@workinaustralia.com"
                className="hover:text-white transition-colors duration-150"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-muted-foreground text-xs">
              © 2025 Work in Australia. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Sold via Hotmart. Individual results may vary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
