import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа").max(20, "Максимум 20 символов"),
  telegram: z.string().min(2, "Минимум 2 символа").max(20, "Максимум 20 символов"),
  message: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
