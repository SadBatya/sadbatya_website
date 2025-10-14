import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  modalClassName?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, onClose, isOpen, modalClassName }: Props) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
      onClose();
    }}
    className={twMerge(
      "fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50",
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    )}
  >
    <div className="flex items-center justify-center h-full">
      <div
        className={twMerge(
          "bg-black p-4 w-[(calc(100%-40px))] flex flex-col gap-8",
          modalClassName
        )}
      >
        {children}
      </div>
    </div>
  </div>
);
