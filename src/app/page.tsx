import Link from "next/link";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800 text-white">
      <h1 className="font-mono text-3xl">T3 Taiwan Bus</h1>
      <Link href="/bus/Taichung" className="m-4 font-mono">---Click Here---</Link>
    </main>
  );
}

