import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EnergyWallet Ticket Centre | Emmanuel Maduabuchi",
  description: "Engineering case study: secure payment verification, Firebase-backed ticketing, automated issuance and event check-in.",
};

const stack = ["Next.js", "TypeScript", "Firebase Auth", "Firestore", "Paystack", "Vercel Blob", "Resend", "RBAC"];

export default function TicketCentreCaseStudy() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
      <article className="mx-auto max-w-4xl">
        <Link href="/#projects" className="text-sm text-emerald-300 hover:text-emerald-200">← Back to featured projects</Link>
        <p className="mt-12 text-xs uppercase tracking-[0.2em] text-emerald-300">Production engineering · Case study</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">EnergyWallet Ticket Centre</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">A payment-integrated event ticketing platform connecting checkout, purchase verification, ticket generation, delivery and controlled event entry.</p>
        <div className="mt-7 flex flex-wrap gap-2">{stack.map(item => <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300">{item}</span>)}</div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://tickets.energywalletng.com" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950">Visit live platform ↗</a>
          <a href="mailto:hello@lightways.tech?subject=EnergyWallet%20Ticket%20Centre%20architecture%20walkthrough" className="rounded-lg border border-white/20 px-5 py-3 text-sm">Request technical walkthrough</a>
        </div>
        <section className="mt-16 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-semibold">The challenge</h2><p className="mt-3 leading-7 text-zinc-300">Paid and free event registration must maintain clear purchase states, enforce ticket capacity, and issue verifiable admission credentials without relying on untrusted client-side payment results.</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-semibold">My contribution</h2><p className="mt-3 leading-7 text-zinc-300">Designed and implemented major backend workflows, payment integration, authentication and authorization boundaries, ticket generation, deployment and operational troubleshooting.</p></div>
        </section>
        <section className="mt-16"><h2 className="text-2xl font-semibold">Transaction and ticket lifecycle</h2><ol className="mt-6 grid gap-3">{[
          ["01", "Checkout", "A customer selects an event, ticket tier or table and initiates checkout."],
          ["02", "Payment verification", "Paystack payment status is verified server-side; signed webhook events drive purchase processing."],
          ["03", "Ticket issuance", "The system records the purchase, prepares a signed ticket token and generates ticket and receipt PDFs."],
          ["04", "Delivery", "Ticket assets are stored and sent through an automated email workflow."],
          ["05", "Entry verification", "Authorized event staff verify admission credentials through protected check-in tools."],
        ].map(([n,title,description]) => <li key={n} className="flex gap-5 rounded-xl border border-white/10 p-5"><span className="font-mono text-emerald-300">{n}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-zinc-300">{description}</p></div></li>)}</ol></section>
        <section className="mt-16"><h2 className="text-2xl font-semibold">Engineering considerations</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{[
          ["Trust boundaries", "Client checkout completion is not treated as authoritative proof of payment. Server-side verification and webhook signature checks protect transaction workflows."],
          ["Authorization", "Firebase authentication and server-side administrative guards restrict sensitive operations and staff verification tools."],
          ["Capacity and state", "Ticket tier and table availability checks reduce overselling risks, while explicit purchase and ticket states support operational traceability."],
          ["Delivery and recovery", "PDF generation, object storage and transactional email connect verified purchases to customer-facing ticket delivery."],
        ].map(([title,body]) => <div key={title} className="rounded-xl bg-white/5 p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-300">{body}</p></div>)}</div></section>
        <section className="mt-16 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6"><h2 className="text-xl font-semibold">Source access and evidence</h2><p className="mt-3 leading-7 text-zinc-300">The production repository is private to protect intellectual property, customer information and operational security. I can discuss architecture, code structure, security decisions and implementation details in a technical interview. This case study describes system design and implemented workflows; it does not claim independently audited payment guarantees or performance metrics.</p></section>
        <footer className="mt-14 border-t border-white/10 pt-7 text-sm text-zinc-400">Emmanuel Maduabuchi · Senior Backend & Platform Engineer</footer>
      </article>
    </main>
  );
}
