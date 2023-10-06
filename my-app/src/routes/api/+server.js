import { json } from "@sveltejs/kit";

export async function POST() {
	/** @type { {name: string, age: number}[] } */
	let data= [
		{ name: "Jaipal", age: 18 },
		{ name: "Hema", age: 21 }
	];
	return json({ data, status: 200 });
}
