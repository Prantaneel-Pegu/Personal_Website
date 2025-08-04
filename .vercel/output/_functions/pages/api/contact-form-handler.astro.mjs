import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_jM8rpZYr_75XaRr3NawP7PmM1FjRpptor");
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";
    const { data, error } = await resend.emails.send({
      from: "api@prantaneelpegu.com",
      to: "contact@prantaneelpegu.com",
      subject: "New Contact Form Submission",
      html: `
                        <strong>Name:</strong> ${name}<br>
                        <strong>Email:</strong> ${email}<br>
                        <strong>Message:</strong><br> ${message.replace(/\n/g, "<br>")}
                    `,
      headers: {
        "X-Priority": "1 (Highest)",
        "X-MSMail-Priority": "High",
        Importance: "High"
      }
    });
    if (error) {
      console.error("Form processing error:", error);
      return Response.json("Error processing form.", { status: 500 });
    }
    return new Response("Form submitted successfully.", { status: 200 });
  } catch (error) {
    console.error("Form processing error:", error);
    return new Response("Error processing form.", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
