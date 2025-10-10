import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface OrderRequest {
  name: string;
  telegram: string;
  message?: string;
}

export type OrderResponse =
  | { success: true }
  | { success: false; error: string };

export async function POST(req: NextRequest) {
  try {
    const body: OrderRequest = await req.json();

    const { name, telegram, message } = body;

    const res = await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: `Имя: ${name}\nТелеграм: ${telegram}\nСообщение: ${
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
