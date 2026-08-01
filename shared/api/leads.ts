export type OrderResponse = { success: true } | { success: false; error: string };

async function post(url: string, body: unknown): Promise<OrderResponse> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

export function createOrder(order: {
  name: string;
  telegram: string;
  message?: string;
  services: string;
  price: number;
}) {
  return post("/api/create-order", order);
}

export function sendApplication(application: {
  name: string;
  telegram: string;
  message?: string;
}) {
  return post("/api/send-application", application);
}
