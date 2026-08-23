import { db } from "@/db";
import { contactMessages } from "@/db/schema";

export const dynamic = "force-dynamic";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { name?: string; email?: string; message?: string };
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const message = body.message?.trim() ?? "";

    if (name.length < 2 || name.length > 255) {
      return Response.json({ message: "Please enter your name." }, { status: 400 });
    }

    if (!isValidEmail(email) || email.length > 255) {
      return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length < 10 || message.length > 5000) {
      return Response.json({ message: "Please enter a message of at least 10 characters." }, { status: 400 });
    }

    await db.insert(contactMessages).values({ name, email, message });

    return Response.json({
      message: "Thanks — we received your note and will read it soon.",
    });
  } catch {
    return Response.json({ message: "Unable to send your message right now. Please try again." }, { status: 500 });
  }
}
