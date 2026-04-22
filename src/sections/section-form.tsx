import { Section } from "@/shared/ui";
import { Title, TextInput, Button, Checkbox } from "@mantine/core";
import style from "./section-form.module.css";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

const formSchema = z.object({
  username: z.string().min(1, "Имя обязательно"),
  telegram: z.string().min(1, "Телеграм обязателен"),
  phone: z
    .string()
    .min(1, "Телефон обязателен")
    .max(11, "Телефон должен содержать не более 11 цифр"),
});

export const SectionForm = () => {
  const [isAgreement, setIsAgreement] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const requestLeads = async () => {
      const { data, error } = await supabase.from("jobs").select();
      console.log(data, error);
    };

    requestLeads();
  }, []);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await supabase.from("jobs").insert(data);
    console.log(data);
    reset();
  };

  return (
    <Section className={style.section}>
      <Title>Предложить работу</Title>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <TextInput
          {...register("username")}
          placeholder="Ваше имя"
          label="Имя"
        />
        <TextInput
          {...register("telegram")}
          placeholder="Телеграм"
          label="Телеграм"
        />
        <TextInput
          error={errors.phone?.message}
          type="number"
          {...register("phone")}
          placeholder="8-999-123-45-67"
          label="Телефон"
        />

        <Checkbox
          checked={isAgreement}
          onChange={(e) => setIsAgreement(e.target.checked)}
          label="Даю согласие на обработку персональных данных"
        />

        <div className={style.buttons}>
          <Button disabled={!isAgreement} type="submit">
            Отправить
          </Button>
          <Button type="reset">Очистить форму</Button>
        </div>
      </form>
    </Section>
  );
};
