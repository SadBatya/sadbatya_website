import { z } from "zod";
import { supabase } from "@/shared/lib/supabase";
import { leadSchema } from "@/shared/lib/lead-schema";

const orderSchema = leadSchema.extend({
  services: z.string().min(1),
  price: z.number(),
});

export type OrderResponse = { success: true } | { success: false; error: string };

export async function createOrder(request: Request) {
  const body = await request.json();
  const parsed = orderSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { success: false, error: parsed.error.issues[0]?.message ?? "Некорректные данные" } satisfies OrderResponse
    );
  }

  const { name, telegram, message, services, price } = parsed.data;
  const { error } = await supabase
    .from("orders")
    .insert({ name, telegram, message: message ?? null, services, price });

  if (error) {
    return Response.json({ success: false, error: error.message } satisfies OrderResponse);
  }

  return Response.json({ success: true } satisfies OrderResponse);
}
