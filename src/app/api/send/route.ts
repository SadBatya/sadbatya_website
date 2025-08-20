import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { name, telegram, message } = await req.json();
    console.log(name, telegram, message, "request");

    const res = await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        text: `Имя: ${name}\nТелеграм: ${telegram}\nСообщение: ${
          message ?? "-"
        }`,
      }
    );

    if (res.data.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Telegram API error" });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
