import HomeDisplay from "@/components/home-display";

export default async function Home() {
	return (
		<main className="w-full">
			<div className="flex flex-col w-full items-center justify-between">
				<h2 className="m-5 text-6xl text-center">Find your rank</h2>
				<HomeDisplay />
			</div>
		</main>
	);
}
