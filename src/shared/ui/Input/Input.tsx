import { ErrorMessage } from "@/shared/ui";

interface Props {
  placeholder: string;
  type?: string;
  name: string;
  error?: string;
  dataTestId?: string;
}

export const Input = ({
  placeholder,
  type = "text",
  name,
  error,
  dataTestId,
  ...props
}: Props) => (
  <div className="flex flex-col gap-2 w-full">
    <input
      data-testId={dataTestId}
      {...props}
      name={name}
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 outline-none rounded-md border border-[#3f3f3f] shadow-md shadow-white/10 transition-all duration-500 focus:shadow-white/30"
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </div>
);
