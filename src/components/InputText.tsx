import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputTextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputTextRootProps {
  children: ReactNode;
}

export interface InputTextIconProps {
  children: ReactNode;
}

function InputTextRoot({ children }: InputTextRootProps) {
  return (
    <div className="py-4 px-3 h-12 flex items-center gap-3 bg-gray-800  rounded w-full focus-within:ring-2 ring-cyan-400">
      {children}
    </div>
  );
}
InputTextIcon.displayName = "InputText.Root";

function InputTextIcon(props: InputTextIconProps) {
  return <Slot className=" w-6 h-6 text-gray-400">{props.children}</Slot>;
}

InputTextIcon.displayName = "InputText.Icon";

function InputTextInput(props: InputTextInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 "
      {...props}
    ></input>
  );
}
InputTextIcon.displayName = "InputText.Input";

export const InputText = {
  Root: InputTextRoot,
  Input: InputTextInput,
  Icon: InputTextIcon,
};
