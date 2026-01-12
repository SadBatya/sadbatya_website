import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface FormRequest {
  name: string;
  telegram: string;
  test: string;
  level: string;
  message?: string;
}

type OrderResponse = { success: true } | { success: false; error: string };

export async function POST(req: NextRequest) {
  try {
    const body: FormRequest = await req.json();

    const { name, telegram, test, level, message } = body;

    const res = await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: `Имя: ${name}\nТелеграм: ${telegram}\n \nТест: ${test}\nУровень: ${level}\n \nСообщение: ${
          message ?? "-"
        }`,
      }
    );

    if (res.data.ok) {
      return NextResponse.json<OrderResponse>({ success: true });
    } else {
      return NextResponse.json<OrderResponse>({
        success: false,
        error: "Telegram API error",
      });
    }
  } catch (error) {
    return NextResponse.json<OrderResponse>({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
