import { goto } from '$app/navigation';

export async function load({ cookies }) {
    try {
        let string_data = await cookies.get('data', { path: '/' }) || '{}';
        let data = JSON.parse(string_data);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        goto("/dashboard/login");
    }
}