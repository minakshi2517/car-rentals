import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-center px-4">
      <p className="label-tag mb-4">404</p>
      <h1 className="font-display text-display-xl font-bold text-brand-white leading-none mb-4">
        Wrong turn.
      </h1>
      <p className="text-brand-silver text-lg max-w-sm leading-relaxed mb-10">
        This page doesn&apos;t exist — but your next great drive is only a click away.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-brand-accent text-brand-black font-display font-bold rounded-full hover:bg-brand-white transition-colors duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
}
