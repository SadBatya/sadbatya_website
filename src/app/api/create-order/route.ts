import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export type OrderRequest = {
  name: string;
  telegram: string;
  message?: string;
  services: string;
  price: string;
};

export type OrderResponse =
  | { success: true }
  | { success: false; error: string };

export async function POST(req: NextRequest) {
  try {
    const body: OrderRequest = await req.json();

    const { name, telegram, message, services, price } = body;

    const res = await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: `Имя: ${name}\nТелеграм: ${telegram}\nЗаказ: ${services}\nИтого: ${price}\nСообщение: ${
          message ?? ""
        }`,
      }
    );

    if (res.data.ok) {
      return NextResponse.json<OrderResponse>({ success: true });
    }

    return NextResponse.json<OrderResponse>({
      success: false,
      error: "Telegram API error",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json<OrderResponse>({
      success: false,
      error: message,
    });
  }
}
