import { eq } from "drizzle-orm";
import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";

export const dynamic = "force-dynamic";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim().toLowerCase() ?? "";

    if (!isValidEmail(email) || email.length > 255) {
      return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const existing = await db.select().from(newsletterSubscribers).where(eq(newsletterSubscribers.email, email)).limit(1);

    if (existing.length === 0) {
      await db.insert(newsletterSubscribers).values({ email });
    }

    return Response.json({
      message: "You’re on the list. Watch your inbox for tax-season reminders.",
    });
  } catch {
    return Response.json({ message: "Unable to subscribe right now. Please try again." }, { status: 500 });
  }
}
