import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { name, telegram, message } = await req.json();
    console.log(name, telegram, message, "request");

    const res = await axios.post(
      `https://api.telegram.org/bot8493350338:AAH60DRbyF37VQuFbhoeZpjT6H1y1VnzGXY/sendMessage`,
      {
        chat_id: 1811143616,
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
