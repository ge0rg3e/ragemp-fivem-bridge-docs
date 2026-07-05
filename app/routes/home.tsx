import type { Route } from "./+types/home";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  ArrowRight,
  Cable,
  Cog,
  Layers,
  Plug,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";
import { Link } from "react-router";
import { appName } from "@/lib/shared";
import { baseOptions } from "@/lib/layout.shared";

const features = [
  {
    title: "RAGE:MP-Style API Surface",
    description:
      "Keep your existing `mp.*` scripting model while the bridge handles FiveM runtime mapping.",
    icon: Layers,
  },
  {
    title: "Server + Client + CEF Runtime",
    description:
      "Unified runtime behavior across gameplay logic, client systems, and browser-based UI.",
    icon: Workflow,
  },
  {
    title: "Procedure and Event Compatibility",
    description:
      "Use familiar remote patterns with compatibility plugins for real-world game modes.",
    icon: Cable,
  },
  {
    title: "Plugin-Driven Extensions",
    description:
      "Enable optional bridge plugins for spawn flow, file compatibility, vehicle sync, and more.",
    icon: Plug,
  },
  {
    title: "Production-Ready Security Controls",
    description:
      "Ship with tighter defaults around eval/invoke, input trust boundaries, and resource configuration.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Migration Workflow",
    description:
      "Move from RAGE:MP to FiveM with practical docs focused on architecture and porting decisions.",
    icon: Terminal,
  },
] as const;

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Home | ${appName}` },
    {
      name: "description",
      content:
        "Documentation for using ragemp-fivem-bridge to run RAGE:MP-style JavaScript gamemodes on FiveM.",
    },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.14),rgba(0,0,0,0)_70%)]" />

        <main className="mx-auto flex w-full max-w-(--fd-layout-width) flex-col gap-16 px-4 pb-20 pt-16">
          <section className="relative overflow-hidden rounded-2xl border border-fd-border/70 bg-fd-card/40 p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 size-44 rounded-full bg-amber-500/10 blur-2xl" />

            <h1 className="mt-5 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Build and ship FiveM servers with your RAGE:MP JavaScript code.
            </h1>

            <p className="mt-5 max-w-3xl text-pretty text-sm text-fd-muted-foreground sm:text-base">
              {appName} provides a compatibility runtime that maps familiar
              `mp.*` behavior onto FiveM systems. This documentation focuses on
              migration speed, runtime correctness, and production stability.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
                to="/docs/getting-started"
              >
                Start With Docs
                <ArrowRight className="size-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-background/70 px-5 py-2.5 text-sm font-medium text-fd-foreground transition hover:bg-fd-accent"
                to="/docs/architecture"
              >
                View Architecture
              </Link>
            </div>
          </section>

          <section aria-labelledby="features-title" className="space-y-6">
            <div className="space-y-2">
              <h2
                id="features-title"
                className="text-2xl font-semibold tracking-tight"
              >
                Bridge Features
              </h2>
              <p className="text-sm text-fd-muted-foreground sm:text-base">
                The bridge is designed for teams migrating existing code while
                keeping development flow predictable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group rounded-xl border border-fd-border/80 bg-fd-card/40 p-5 transition hover:border-fd-primary/40 hover:bg-fd-card/70"
                >
                  <div className="mb-3 inline-flex rounded-lg border border-fd-border bg-fd-background/70 p-2 text-fd-muted-foreground transition group-hover:text-fd-primary">
                    <feature.icon className="size-4.5" />
                  </div>
                  <h3 className="text-sm font-semibold sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-fd-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <footer className="pt-2 text-left text-sm text-fd-muted-foreground">
            Docs made by{" "}
            <a
              className="font-medium text-fd-foreground transition hover:text-fd-primary"
              href="https://github.com/ge0rg3e"
              target="_blank"
            >
              Ge0rg3e
            </a>
          </footer>
        </main>
      </div>
    </HomeLayout>
  );
}
