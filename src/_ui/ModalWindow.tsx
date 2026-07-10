"use client";

import { Modal as ModalHero } from "@heroui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";

type ModalWindowProps = {
  children: ReactNode;
  heading?: string;
  isOpen?: boolean;
  close?: Dispatch<SetStateAction<boolean>>;
};

function ModalWindow({ children, heading, close, isOpen }: ModalWindowProps) {
  const handleClose = () => {
    close?.(false);
  };

  return (
    <ModalHero.Backdrop variant="blur" isOpen={isOpen!}>
      <ModalHero.Container placement="center">
        <ModalHero.Dialog className="sm:max-w-90">
          <ModalHero.CloseTrigger
            onClick={handleClose}
            className="bg-red-400 text-white"
          />
          <ModalHero.Header>
            <ModalHero.Heading>{heading}</ModalHero.Heading>
          </ModalHero.Header>
          <ModalHero.Body>{children}</ModalHero.Body>
        </ModalHero.Dialog>
      </ModalHero.Container>
    </ModalHero.Backdrop>
  );
}

export default ModalWindow;
