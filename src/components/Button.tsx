import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const ButtonComp = asChild ? Slot : "button";

  return (
    <ButtonComp className="text-black py-4 px-3 bg-cyan-500 rounded font-sans font-semibold text-sm w-full transition-colors hover:bg-cyan-400 focus:ring-2 ring-gray-100">
      {children}
    </ButtonComp>
  );
}
