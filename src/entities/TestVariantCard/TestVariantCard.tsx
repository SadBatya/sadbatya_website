import { Container } from "@/shared/ui";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

export const TestVariantCard = ({ text, onClick, className }: Props) => (
  <Container
    onClick={onClick}
    className={twMerge("flex items-center gap-4", className)}
  >
    <p>{text}</p>
  </Container>
);
