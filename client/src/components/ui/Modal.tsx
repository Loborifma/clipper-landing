import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

type Props = {
  slotTrigerButton: ReactNode;
  title: string;
  description?: string;
  content: ReactNode;
  contentClassName?: string;
};

export const Modal = ({
  slotTrigerButton,
  title,
  description,
  content,
  contentClassName = "max-w-4xl",
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{slotTrigerButton}</DialogTrigger>
      <DialogContent className={contentClassName}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        {content}
      </DialogContent>
    </Dialog>
  );
};
