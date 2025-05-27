/**
 * Login credentials to match against
 */

const credentials = {
  username: "supersky84@gmail.com",
  password: "spicyeye56"
}
export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      username: string;
      password: string;
    }
    if (body.username === credentials.username && body.password === credentials.password) {
      return new Response(JSON.stringify({ success: true, data: { message: "Login successful" } }), { status: 200 })
    } else {
      return new Response(JSON.stringify({ success: false, data: { message: "Invalid credentials" } }), { status: 401 })
    }
  } catch (error) {
    console.log("Error in `login` route")
    return new Response(JSON.stringify({ success: false, data: { message: (error as Error).message ?? "something went wrong. please try again later." } }), { status: 500 })
  }
}