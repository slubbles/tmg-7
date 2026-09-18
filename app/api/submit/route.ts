export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const type = body?.type || "contact";
  const url =
    type === "newsletter"
      ? process.env.WEBHOOK_URL_NEWSLETTER
      : type === "schedule"
        ? process.env.WEBHOOK_URL_SCHEDULE
        : process.env.WEBHOOK_URL_CONTACT;

  if (url) {
    try {
      const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!r.ok) console.error("webhook forward failed", r.status, await r.text());
    } catch (e) {
      console.error("webhook error", e);
    }
  } else {
    console.log("submit (offline success — no webhook configured)", body);
  }
  return Response.json({ ok: true });
}
