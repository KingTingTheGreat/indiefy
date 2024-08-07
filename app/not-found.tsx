import Link from "next/link";

export default function NotFound() {
	return (
		<main className="w-full">
			<div className="w-full h-full flex flex-col justify-center items-center">
				<h1 className="text-3xl">404 - Page Not Found</h1>
				<Link href="/">← Back to home</Link>
			</div>
		</main>
	);
}
