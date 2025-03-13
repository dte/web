import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto px-4 py-16">
        <p className="text-lg">
          Currently building frontier reasoning systems @ {" "}
          <Link href="https://www.atg-intelligence.com" className="underline hover:text-gray-600">
            Autonomous Technologies Group
          </Link>
          .
        </p>
        <p className="text-lg">
        Previously: CEO & Co-founder @ Paperspace (acquired by DigitalOcean)
        </p>
        <p className="text-lg">
        Investor + advisor @ <Link href="https://www.runwayml.com/" className="underline hover:text-gray-600">RunwayML</Link>, <Link href="https://www.nomic.ai/" className="underline hover:text-gray-600">Nomic</Link>, <Link href="https://www.etched.com/" className="underline hover:text-gray-600">Etched.ai</Link>
        </p>
      </main>
    </div>
  );
}
