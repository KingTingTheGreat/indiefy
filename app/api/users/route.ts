import getAllUsers from "@/utils/getAllUsers";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
	const users = await getAllUsers();
	return new Response(JSON.stringify(users), {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});
}
