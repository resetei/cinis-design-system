import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { ReactNode } from "react";
import { Check } from "phosphor-react";

export interface CheckboxProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Checkbox({ children, asChild }: CheckboxProps) {
  return (
    <RadixCheckbox.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded ">
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
