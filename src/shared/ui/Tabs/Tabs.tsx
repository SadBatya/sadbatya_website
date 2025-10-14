import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  tabs: {
    title: string;
    onClick: () => void;
  }[];
  query: string;
}

export const Tabs = ({ tabs, query, className }: Props) => (
  <div className={twMerge("flex items-center gap-1.5 md:gap-4", className)}>
    {tabs.map(({ title, onClick }, index) => (
      <button
        className={twMerge(
          "px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-500 border border-transparent font-semibold bg-white/10",
          title === String(query) && "bg-black border-white/80"
        )}
        onClick={onClick}
        key={index}
      >
        {title}
      </button>
    ))}
  </div>
);
