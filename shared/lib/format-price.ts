export function formatPrice(n: number) {
  return n === 0 ? "Free" : `${n.toLocaleString("ru-RU")} ₽`;
}

/** Always renders as currency, even for zero — used for running totals. */
export function formatTotal(n: number) {
  return `${n.toLocaleString("ru-RU")} ₽`;
}

/** Back-calculates the pre-discount price the same way the design prototype does. */
export function originalPrice(price: number, discount: number) {
  return Math.round(price / (1 - discount / 100) / 500) * 500;
}
