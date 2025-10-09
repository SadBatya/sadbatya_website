import z from "zod";

export const zodSсhemes = {
  name: z
    .string()
    .min(2, "Минимум 2 символа")
    .max(20, "Максимум 50 символов")
    .nonempty(),
  telegram: z
    .string()
    .min(2, "Минимум 2 символа")
    .max(20, "Максимум 50 символов")
    .nonempty(),
  textarea: z.string().optional(),
  services: z.string().nonempty(),
  price: z.number(),
};
