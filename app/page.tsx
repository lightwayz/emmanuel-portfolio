// app/page.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

// NOTE: If you want metadata, move it to app/layout.tsx or remove "use client".
// Keeping this file client-side for Framer Motion simplicity.

const links = {
    linkedin: "https://linkedin.com/in/emmanuel-maduabuchi-38354315a",
    github: "https://github.com/lightwayz",
    cv: "/Emmanuel_Maduabuchi_CV.pdf",
};

const projects = [
    {
        name: "EnergyWalletNG — Transaction & Identity Platform",
        summary:
            "Secure, high-availability platform for payments, identity, and admin operations with traceability.",
        problem:
            "Needed reliable transaction flows where silent failures and unclear states reduce user trust.",
        solution:
            "Implemented verification with retries, audit logging, RBAC separation, and production observability patterns.",
        impact: [
            "Reduced silent failures by making error states explicit and observable",
            "Improved traceability across payment and identity workflows",
        ],
        tech: ["Node.js", "TypeScript", "Firebase", "Paystack", "Serverless", "RBAC"],
        links: [{ label: "Private demo (on request)", href: "#contact" }],
        note:
            "Source code is private due to production IP. Guided walkthrough or temporary read-only access available on request.",
    },
    {
        name: "RBAC Admin & Secure Ops Console",
        summary:
            "Multi-role admin dashboards with strict access segregation and audit-friendly actions.",
        problem:
            "Operational teams needed safe access control without privilege leakage across roles.",
        solution:
            "Role-based permissions enforced at API boundaries; sensitive actions logged for accountability.",
        impact: ["Clear separation of privileges", "Audit-ready operational workflows"],
        tech: ["React", "TypeScript", "RBAC", "Secure APIs"],
        links: [{ label: "Walkthrough (on request)", href: "#contact" }],
        note: "Screenshots/walkthrough available without sharing proprietary code.",
    },
    {
        name: "reliability-demo-api (NestJS demo)",
        summary:
            "IP-safe NestJS demo showing modules, DI, guards (RBAC), failure-aware endpoints, and audit-style logging.",
        problem:
            "Need a public proof of NestJS patterns without exposing production repos.",
        solution:
            "Small demo API: auth, roles guard, idempotent payment intent, verify flow with explicit unknown states.",
        impact: ["Demonstrates NestJS structure and security patterns"],
        tech: ["NestJS", "TypeScript", "JWT", "RBAC", "Testing-ready DI"],
        links: [
            {
                label: "GitHub (NestJS demo repo)",
                href: "https://github.com/lightwayz/nestjs-reliability-demo",
            },
        ],

        note:
            "Demo is intentionally generic and contains no business logic, secrets, or customer data.",
    },
];

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>

);
}

function SectionTitle({
                          kicker,
                          title,
                          desc,
                          id,
                      }: {
    kicker: string;
    title: string;
    desc?: string;
    id?: string;
}) {
    return (
        <div id={id} className="mb-6">
            <p className="text-xs uppercase tracking-widest text-white/50">{kicker}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
            {desc ? <p className="mt-2 text-white/70">{desc}</p> : null}
        </div>
    );
}

function useMotion() {
    const reduce = useReducedMotion();

    const ease = [0.22, 1, 0.36, 1] as const;

    const fadeUp = {
        hidden: { opacity: 0, y: reduce ? 0 : 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease },
        },
    };

    const stagger = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.08, delayChildren: 0.02 },
        },
    };

    const hoverLift = reduce
        ? {}
        : { y: -2, transition: { duration: 0.15 } };

    return { reduce, fadeUp, stagger, hoverLift };
}

function MotionSection({
                           id,
                           children,
                       }: {
    id?: string;
    children: React.ReactNode;
}) {
    const { fadeUp, stagger } = useMotion();
    return (
        <motion.section
            id={id}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="pt-12"
        >
            <motion.div variants={fadeUp}>{children}</motion.div>
        </motion.section>
    );
}

export default function Page() {
    const { fadeUp, stagger, hoverLift } = useMotion();

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="glow-bg" />
            {/* Top gradient */}
            <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-emerald-500/10 via-zinc-950 to-zinc-950" />

            <div className="relative mx-auto max-w-5xl px-6 py-10">
                {/* Header */}
                <motion.header
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-6 border-b border-white/10 pb-10"
                >
                    <motion.div variants={fadeUp} className="flex flex-col gap-3">
                        <p className="text-xs uppercase tracking-widest text-white/50">
                            Failure-First • Reliability • Security • Performance
                        </p>
                        <h1 className="text-4xl font-semibold leading-tight">
                            Emmanuel Maduabuchi
                        </h1>
                        <p className="text-white/80">
                            Full-Stack Systems Architect (High-Reliability Platforms)
                        </p>
                        <p className="max-w-3xl text-white/70">
                            I design and build secure, failure-aware web and backend systems
                            for fintech, enterprise, and integration-heavy platforms — with
                            observability, auditability, and real-world performance in mind.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                        <motion.a
                            whileHover={hoverLift}
                            whileTap={{ scale: 0.98 }}
                            href="#projects"
                            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white/90"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            whileHover={hoverLift}
                            whileTap={{ scale: 0.98 }}
                            href={links.cv}
                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                        >
                            Download CV
                        </motion.a>
                        <motion.a
                            whileHover={hoverLift}
                            whileTap={{ scale: 0.98 }}
                            href={links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                        >
                            LinkedIn
                        </motion.a>
                        <motion.a
                            whileHover={hoverLift}
                            whileTap={{ scale: 0.98 }}
                            href={links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                        >
                            GitHub
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap gap-2 pt-2"
                    >
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>NestJS-style architecture</Badge>
                        <Badge>Python (AI/Automation)</Badge>
                        <Badge>RBAC</Badge>
                        <Badge>CI/CD + DevSecOps</Badge>
                        <Badge>CDN + performance</Badge>
                    </motion.div>
                </motion.header>

                {/* About */}
                <MotionSection id="about">
                    <SectionTitle
                        kicker="About"
                        title="Systems thinking, not just shipping features"
                        desc="I work best in environments where downtime, security gaps, slow performance, or silent failures have real consequences. My approach is grounded in systems thinking (physics background) and reinforced by ownership of production deployments."
                    />
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid gap-4 md:grid-cols-3"
                    >
                        {[
                            {
                                h: "Focus",
                                p: "Reliability-first architecture, secure transaction flows, and observable systems.",
                            },
                            {
                                h: "Nigeria latency reality",
                                p: "CDN-first delivery, caching, and fast feedback loops to preserve user trust on unstable networks.",
                            },
                            {
                                h: "Security posture",
                                p: "RBAC, secrets hygiene, dependency scanning, and audit trails as defaults — not add-ons.",
                            },
                        ].map((card) => (
                            <motion.div
                                key={card.h}
                                variants={fadeUp}
                                whileHover={hoverLift}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                            >
                                <p className="text-sm text-white/60">{card.h}</p>
                                <p className="mt-2 text-white/85">{card.p}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </MotionSection>

                {/* Skills */}
                <MotionSection id="skills">
                    <SectionTitle
                        kicker="Skills & Stack"
                        title="Modern stack with reliability hooks"
                        desc="Grouped for quick recruiter scanning."
                    />
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid gap-4 md:grid-cols-2"
                    >
                        {[
                            {
                                h: "Frontend",
                                p: "React, Next.js, Flutter",
                            },
                            {
                                h: "Backend",
                                p: "Node.js, TypeScript (NestJS-style modular architecture), Firebase, REST APIs, Python (AI/Automation)",
                            },
                            {
                                h: "Infrastructure",
                                p: "Serverless, Vercel, Cloud Functions, environments & deployments",
                            },
                            {
                                h: "Security & Reliability",
                                p: "RBAC, Auth Guards, Audit logging, Observability, CI/CD + DevSecOps",
                            },
                            {
                                h: "Integrations",
                                p: "Paystack, Termii (SMS/WhatsApp), external APIs",
                                span2: true,
                            },
                        ].map((card) => (
                            <motion.div
                                key={card.h}
                                variants={fadeUp}
                                whileHover={hoverLift}
                                className={`rounded-2xl border border-white/10 bg-white/5 p-5 ${
                                    card.span2 ? "md:col-span-2" : ""
                                }`}
                            >
                                <p className="font-medium">{card.h}</p>
                                <p className="mt-2 text-white/75">{card.p}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </MotionSection>

                <MotionSection id="reliability">
                    <SectionTitle
                        kicker="Reliability"
                        title="How I ship safely and keep systems fast"
                        desc="Practical practices that improve trust on real-world networks."
                    />
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-white/60">CI/CD + DevSecOps</p>
                            <p className="mt-2 text-white/85">
                                Automated checks, dependency scanning, secrets hygiene, and environment isolation to reduce deployment risk.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-white/60">Observability</p>
                            <p className="mt-2 text-white/85">
                                Structured logs, actionable errors, and audit trails to prevent silent failures and speed recovery.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-white/60">CDN + Performance</p>
                            <p className="mt-2 text-white/85">
                                CDN-first delivery, caching, and lightweight UIs to keep load times low under high-latency conditions.
                            </p>
                        </div>
                    </div>
                </MotionSection>


                {/* Projects */}
                <MotionSection id="projects">
                    <SectionTitle
                        kicker="Portfolio"
                        title="Featured projects"
                        desc="Impact-focused summaries. Private work is available via walkthrough or temporary read-only access when appropriate."
                    />

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid gap-5"
                    >
                        {projects.map((p) => (
                            <motion.article
                                key={p.name}
                                variants={fadeUp}
                                whileHover={hoverLift}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                                        <p className="mt-1 text-white/75">{p.summary}</p>
                                    </div>
                                </div>

                                <div className="mt-4 grid gap-4 md:grid-cols-3">
                                    <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                                        <p className="text-xs uppercase tracking-widest text-white/50">
                                            Problem
                                        </p>
                                        <p className="mt-2 text-white/80">{p.problem}</p>
                                    </div>
                                    <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                                        <p className="text-xs uppercase tracking-widest text-white/50">
                                            Solution
                                        </p>
                                        <p className="mt-2 text-white/80">{p.solution}</p>
                                    </div>
                                    <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                                        <p className="text-xs uppercase tracking-widest text-white/50">
                                            Impact
                                        </p>
                                        <ul className="mt-2 list-disc pl-5 text-white/80">
                                            {p.impact.map((x) => (
                                                <li key={x}>{x}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <Badge key={t}>{t}</Badge>
                                    ))}
                                </div>

                                <p className="mt-3 text-sm text-white/60">{p.note}</p>

                                <div className="mt-4 flex flex-wrap gap-3">
                                    {p.links.map((l) => (
                                        <motion.a
                                            key={l.label}
                                            whileHover={hoverLift}
                                            whileTap={{ scale: 0.98 }}
                                            href={l.href}
                                            target={l.href.startsWith("http") ? "_blank" : undefined}
                                            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                                        >
                                            {l.label}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </MotionSection>

                {/* Experience Snapshot */}
                <MotionSection id="experience">
                    <SectionTitle
                        kicker="Experience"
                        title="Snapshot"
                        desc="Full detail is available on the CV."
                    />
                    <motion.div
                        variants={fadeUp}
                        whileHover={hoverLift}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                        <ul className="space-y-3 text-white/80">
                            <li>
                <span className="font-medium text-white">
                  CTO / Full-Stack Engineer
                </span>{" "}
                                — EnergyWalletNG (Remote)
                            </li>
                            <li>
                <span className="font-medium text-white">
                  Full-Stack Developer
                </span>{" "}
                                — Mrock Entertainment / ATHF Kigali (Hybrid)
                            </li>
                            <li>
                                <span className="font-medium text-white">Fleet Analyst</span> —
                                Dangote Group Plc
                            </li>
                        </ul>
                    </motion.div>
                </MotionSection>

                {/* Certifications */}
                <MotionSection id="certifications">
                    <SectionTitle kicker="Certifications" title="Proof of depth" />
                    <motion.div
                        variants={fadeUp}
                        whileHover={hoverLift}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                        <ul className="grid gap-2 text-white/80 md:grid-cols-2">
                            <li>Certified AI Scientist — USAII (2025)</li>
                            <li>Google Cybersecurity Certificate (2023)</li>
                            <li>CompTIA Security+ Bootcamp (2023)</li>
                            <li>IBM DevOps & Software Engineering (2022)</li>
                            <li>Google IT Support Certificate (2022)</li>
                            <li>
                                DevOps Engineer — International DevOps Certification Academy
                                (2022)
                            </li>
                        </ul>
                    </motion.div>
                </MotionSection>

                {/* Contact */}
                <MotionSection id="contact">
                    <SectionTitle
                        kicker="Contact"
                        title="Let’s talk"
                        desc="I’m open to high-reliability roles (fintech, gov, enterprise platforms). Private work can be reviewed via guided walkthrough or temporary access when appropriate."
                    />
                    <motion.div
                        variants={fadeUp}
                        whileHover={hoverLift}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                        <div className="grid gap-3 text-white/80 md:grid-cols-2">
                            <p>
                                <span className="text-white/60">Phone:</span> +2347061927188
                            </p>
                            <p>
                                <span className="text-white/60">Location:</span> Lagos, Nigeria
                                (Hybrid)
                            </p>
                            <p className="md:col-span-2">
                                <span className="text-white/60">Email:</span>{" "}
                                <a
                                    className="underline decoration-white/30 underline-offset-4 hover:text-white"
                                    href="mailto:emmadouabs@gmail.com"
                                >
                                    emmadouabs@gmail.com
                                </a>
                            </p>

                            <p className="md:col-span-2">
                                <span className="text-white/60">LinkedIn:</span>{" "}
                                <a
                                    className="underline decoration-white/30 underline-offset-4 hover:text-white"
                                    href={links.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    linkedin.com/in/emmanuel-maduabuchi-38354315a
                                </a>
                            </p>
                            <p className="md:col-span-2">
                                <span className="text-white/60">GitHub:</span>{" "}
                                <a
                                    className="underline decoration-white/30 underline-offset-4 hover:text-white"
                                    href={links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    github.com/lightwayz
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </MotionSection>

                <footer className="border-t border-white/10 pt-6 text-xs text-white/50">
                    © {new Date().getFullYear()} Emmanuel Maduabuchi • Built with Next.js +
                    Tailwind • Deployed on Vercel
                </footer>
            </div>
        </main>
    );
}
