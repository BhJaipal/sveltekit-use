import { json } from '@sveltejs/kit';

/**
 * Sends a POST request with form data and stores the received data in cookies.
 *
 * @param {import('@sveltejs/kit').RequestEvent} event - the request event
 * @return {Promise<object>} - a promise that resolves to an object containing the received data
 */
export async function POST(event) {
    /**
     * @type {FormData}
     */
    /**
     * @type {{ name: FormDataEntryValue | null, email: FormDataEntryValue | null, phone: FormDataEntryValue | null }}
     */
    const formData = await event.request.json();
    // const formData = await data;
    console.log(formData);
    const out = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
    };
    event.cookies.set('data', JSON.stringify(out));
    return json({ data: out });
}