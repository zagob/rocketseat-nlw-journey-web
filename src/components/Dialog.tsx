import * as DialogRadix from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Dialog = (props: DialogRadix.DialogProps) => (
  <DialogRadix.Root {...props} />
);

type DialogTriggerProps = DialogRadix.DialogTriggerProps &
  React.RefAttributes<HTMLButtonElement>;

export const DialogTrigger: React.FC<DialogTriggerProps> = (props) => {
  return <DialogRadix.Trigger {...props} />;
};

export const DialogTitle = (props: DialogRadix.DialogTitleProps) => (
  <DialogRadix.DialogTitle {...props} />
);

interface DialogContentProps extends DialogRadix.DialogContentProps {
  children: ReactNode;
}

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...props
}) => {
  return (
    <DialogRadix.Portal>
      <DialogRadix.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
      <DialogRadix.Content
        {...props}
        className={twMerge(
          "data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[640px] max-w-[640px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-zinc-900 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
          props.className
        )}
      >
        {children}

        <DialogRadix.Close asChild>
          <button
            className="outline-none absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
            aria-label="Close"
          >
            <X className="size-5 text-zinc-400" />
          </button>
        </DialogRadix.Close>
      </DialogRadix.Content>
    </DialogRadix.Portal>
  );
};
