import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Lead = {
  name?: string;
  phone?: string;
  type?: string;
  city?: string;
  message?: string;
  source?: string;
  /** Honey-pot — повинно бути порожнім */
  website?: string;
};

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const TG_API = "https://api.telegram.org";

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // 1) honey-pot — мовчки повертаємо 200, щоб не давати ботам сигнал
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // 2) валідація мінімального набору
  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  if (name.length < 2 || phone.length < 5) {
    return NextResponse.json(
      { ok: false, error: "validation" },
      { status: 400 }
    );
  }

  // 3) перевіряємо credentials — без них падаємо коректно
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("[/api/lead] TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID не задано");
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 500 }
    );
  }

  // 4) формуємо повідомлення
  const lines: string[] = [];
  lines.push(`<b>🆕 Нова заявка з сайту</b>`);
  if (body.source) lines.push(`<i>${escape(body.source)}</i>`);
  lines.push("");
  lines.push(`<b>Ім'я:</b> ${escape(name)}`);
  lines.push(`<b>Телефон:</b> ${escape(phone)}`);
  if (body.type) lines.push(`<b>Тип об'єкта:</b> ${escape(body.type)}`);
  if (body.city) lines.push(`<b>Місто:</b> ${escape(body.city)}`);
  if (body.message) lines.push(`<b>Повідомлення:</b>\n${escape(body.message)}`);
  lines.push("");
  lines.push(`<i>${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })} · Київ</i>`);

  const text = lines.join("\n");

  // 5) шлемо у TG
  try {
    const tgRes = await fetch(`${TG_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      cache: "no-store",
    });
    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error("[/api/lead] Telegram API error:", tgRes.status, errText);
      return NextResponse.json(
        { ok: false, error: "telegram_failed" },
        { status: 502 }
      );
    }
  } catch (e) {
    console.error("[/api/lead] fetch error:", e);
    return NextResponse.json(
      { ok: false, error: "network" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
