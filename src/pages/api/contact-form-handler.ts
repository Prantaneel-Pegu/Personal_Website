import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log({ name, email, message });

        return new Response('Form submitted successfully.', { status: 200 });
    } catch (error) {
        console.error('Form processing error:', error);
        return new Response('Error processing form.', { status: 500 });
    }
};
