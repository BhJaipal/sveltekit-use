/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const data = cookies.get('data') || { name: '', email: '', phone: '' };
    return { data };
}