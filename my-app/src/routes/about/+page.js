/**
 * Retrieves data from an external API using the provided fetch function.
 *
 * @return {Promise<object>} A promise that resolves to an object containing the retrieved data.
 */
export async function load({ fetch }) {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    /**
     * @return { Array<{userId: number, id: number, title: string, body: string}>}
     */
    let out = await res.json();
    return { data: out };
}