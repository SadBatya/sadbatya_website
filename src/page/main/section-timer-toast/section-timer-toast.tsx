import { ShowTimerToast } from "@/widgets";
import { Button } from "@/shared/ui";

export const SectionTimerToast = () => (
  <>
    <ShowTimerToast delay={5000} showTime={5000}>
      <div className="flex flex-col gap-2">
        Нужен сайт для твоего бизнеса?
        <Button href="#services">Да, нужен ❤️</Button>
      </div>
    </ShowTimerToast>
    <ShowTimerToast delay={10000} showTime={5000}>
      <div className="flex flex-col gap-2">
        Помочь найти работу и подсказать как двигаться дальше?
        <Button href="#services">Да, помочь ❤️</Button>
      </div>
    </ShowTimerToast>
  </>
);
