interface Props {
  placeholder: string;
  type?: string;
  name: string;
}

export const Input = ({ placeholder, type = "text", name }: Props) => (
  <input
    required
    name={name}
    type={type}
    placeholder={placeholder}
    className="px-4 py-2 outline-none w-full bg- rounded-md border border-[#3f3f3f] shadow-md shadow-white/10 transition-all duration-500 focus:shadow-white/30"
  />
);
