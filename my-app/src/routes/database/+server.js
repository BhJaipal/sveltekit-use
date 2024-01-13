
/**
 * Sends a POST request with form data and stores the received data in cookies.
 *
 * @param {Object} request - the request object containing the form data
 * @param {Object} cookies - the cookies object for storing the received data
 * @return {void}
 */
export async function POST({ request, cookies }) {
    const data = request.formData();
    /**
     * @type {FormData}
     */
    //const formData = await data;
    /**
     * @type {{ name: string, email: string, phone: string }}
     */
    const out = {
        name: (await data).get('name'),
        email: (await data).get('email'),
        phone: (await data).get('phone')
    };
    cookies.set('data', JSON.stringify(out), { path: '/' });
    console.log(out);
}