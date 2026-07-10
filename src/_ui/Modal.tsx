"use client";

import { Modal as ModalHero } from "@heroui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";

function Modal({ children }: { children: ReactNode }) {
  return <ModalHero>{children}</ModalHero>;
}

// function Btn({ children }: { children: ReactNode }) {
//   return children;
// }

// Modal.Btn = Btn;
// Modal.Window = Window;

export default Modal;
