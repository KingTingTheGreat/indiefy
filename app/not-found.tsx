import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col h-[89vh] justify-center items-center">
      <h1 className="text-3xl p-1 m-1">404 - Page Not Found</h1>
      <Link
        href="/"
        className="p-0.5 m-1 hover:underline hover:text-customGreen transition-all"
      >
        ← Back to home
      </Link>
    </div>
  );
}
