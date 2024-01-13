/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    try {
        let res = await fetch("/dashboard/profile/+page.server.js");
        if (!res.ok) {
            throw new Error(`Failed to fetch profile data: ${res.statusText}`);
        }
        let out = await res.json();
        return { data: out };
    } catch (error) {
        console.error(error);
        // Handle the error appropriately (e.g., return a default value or show an error message).
        return { data: { name: '', email: '', phone: '' } };
    }
}
