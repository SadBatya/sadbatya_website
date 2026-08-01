import { supabase } from "@/shared/lib/supabase";
import { leadSchema } from "@/shared/lib/lead-schema";
import type { OrderResponse } from "./create-order";

export async function sendApplication(request: Request) {
  const body = await request.json();
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { success: false, error: parsed.error.issues[0]?.message ?? "Некорректные данные" } satisfies OrderResponse
    );
  }

  const { name, telegram, message } = parsed.data;
  const { error } = await supabase
    .from("applications")
    .insert({ name, telegram, message: message ?? null });

  if (error) {
    return Response.json({ success: false, error: error.message } satisfies OrderResponse);
  }

  return Response.json({ success: true } satisfies OrderResponse);
}
