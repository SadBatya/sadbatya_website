interface Props {
  placeholder: string;
  name: string;
}

export const Textarea = ({ placeholder, name }: Props) => (
  <textarea
    placeholder={placeholder}
    name={name}
    id=""
    className="px-4 py-2 outline-none w-full h-[150px] resize-none rounded-md border border-[#3f3f3f] shadow-md shadow-white/10 transition-all duration-500 focus:shadow-white/30"
  />
);
