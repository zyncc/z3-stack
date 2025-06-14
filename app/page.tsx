import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="text-h1">Z3 Stack</h1>

      <h2 className="text-h6">
        Next.js Starter Template by{" "}
        <Link href={"https://github.com/zyncc"}>Zync</Link>
      </h2>
    </div>
  );
}
