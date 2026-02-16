import React from "react";
import { Users, Globe2, ShieldCheck, Sparkles, HeartHandshake, MapPin } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardContent } from "../ui/Card.jsx";

const values = [
  {
    label: "Security as Craft",
    body: "We treat security like architecture: intentional, layered, and human-aware.",
  },
  {
    label: "Radical Clarity",
    body: "No fear-based selling. We explain risk in plain language and clear visuals.",
  },
  {
    label: "Quiet Excellence",
    body: "We prefer clean dashboards to loud dashboards; fewer alerts, better sleep.",
  },
];

const leadership = [
  {
    name: "Aarav Nair",
    role: "Founder & Security Architect",
    tag: "Threat modeling, zero‑trust evangelist",
  },
  {
    name: "Meera Kulkarni",
    role: "Head of Digital Experience",
    tag: "Brand systems, performance storytelling",
  },
  {
    name: "Luis Romero",
    role: "Director of Platform Engineering",
    tag: "Cloud-native, observability, resilience",
  },
];

export default function Company() {
  return (
    <div className="min-h-screen bg-[#f5f2ea] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-amber-200/60 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-4 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <p
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              <ShieldCheck className="h-4 w-4" />
              Ignix Social — Company
            </p>

            <h1
              className="text-4xl leading-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
              style={{ fontFamily: "var(--font-founders-grotesk)" }}
            >
              We build calm, secure{" "}
              <span className="bg-[linear-gradient(120deg,#0f172a,#0369a1)] bg-clip-text text-transparent">
                digital ecosystems
              </span>{" "}
              for ambitious teams.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg">
              Ignix Social is a small, opinionated studio operating at the intersection of cybersecurity,
              product design, and growth. We help companies scale without surrendering trust, performance, or
              narrative.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                variant="primary"
                className="rounded-2xl bg-slate-900 px-7 py-3 text-sm tracking-wide text-slate-50 hover:bg-black"
              >
                Meet the team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-[1.5px] border-slate-700/40 bg-white/60 px-7 py-3 text-sm text-slate-800 hover:bg-slate-100"
              >
                Download company profile
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-slate-700" />
                <span>Clients across 11 timezones</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-700" />
                <span>Hybrid studio: Bengaluru · Berlin · Remote</span>
              </div>
            </div>
          </div>

          {/* Right: stats panel */}
          <div className="relative w-full max-w-md self-stretch lg:self-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 shadow-2xl" />
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_0_0,#38bdf8_0,transparent_55%),radial-gradient(circle_at_100%_100%,#f97316_0,transparent_55%)] px-6 py-7 text-slate-50 sm:px-8 sm:py-9">
              <header className="space-y-2">
                <p className="text-xs uppercase tracking-[0.22em] text-sky-200/80">
                  Studio snapshots
                </p>
                <p className="text-sm text-slate-200/90">
                  Structured like a product team, obsessed with latency—technical and human.
                </p>
              </header>

              <div className="mt-6 grid grid-cols-2 gap-5 text-sm">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                    Average engagement
                  </p>
                  <p className="mt-2 text-2xl font-semibold">18 months</p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Long-haul partnerships, not quick wins.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">Security first</p>
                  <p className="mt-2 text-2xl font-semibold">0</p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Recorded client-impacting incidents to date.
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl border border-white/15 bg-black/5 p-4 backdrop-blur">
                  <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                    <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                    What we optimise for
                  </p>
                  <p className="mt-2 text-sm text-slate-100">
                    Clear runbooks, elegant dashboards, and teams that feel in control of their attack surface and
                    brand story.
                  </p>
                </div>
              </div>

              <footer className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4 text-emerald-300" />
                  <span>ISO-aligned practices, human-centered advisory.</span>
                </div>
                <div className="hidden items-center gap-1 sm:flex">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Nagpur · Berlin</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-slate-200 bg-[#fdfbf6]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-16">
          <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Studio values
              </p>
              <h2
                className="mt-2 text-2xl sm:text-3xl"
                style={{ fontFamily: "var(--font-founders-grotesk)" }}
              >
                How we like to work with you.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600">
              We combine rigorous security thinking with design sensitivity. The result: platforms that feel
              beautifully simple on the surface and obsessively engineered underneath.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {values.map((v) => (
              <Card
                key={v.label}
                className="border border-slate-200/80 bg-white/80 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
              >
                <CardContent className="space-y-2 px-5 py-5">
                  <p
                    className="text-[13px] font-semibold uppercase tracking-[0.22em] text-slate-700"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {v.label}
                  </p>
                  <p className="text-sm text-slate-600">{v.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#f5f2ea]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Leadership
              </p>
              <h2
                className="mt-2 text-2xl sm:text-3xl"
                style={{ fontFamily: "var(--font-founders-grotesk)" }}
              >
                The people behind the systems.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600">
              A small senior team, extended by a distributed network of specialists in red teaming, data, and
              digital experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="group rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-semibold text-slate-900">
                      {person.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                      {person.role}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-50">
                    Ignix
                  </span>
                </div>
                <p className="text-xs text-slate-600">{person.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

