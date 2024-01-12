import classes from "@/components/Modal.module.css";
import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}
