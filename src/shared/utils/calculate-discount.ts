export const CalculateDiscount = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};
