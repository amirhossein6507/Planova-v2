import { Button, Modal as ModalHero, Surface } from "@heroui/react";
import { ReactNode } from "react";

function Modal({ children }: { children: ReactNode }) {
  return <ModalHero>{children}</ModalHero>;
}

function Btn({ children }: { children: ReactNode }) {
  return children;
}

function Window({
  children,
  heading,
}: {
  children: ReactNode;
  heading?: string;
}) {
  return (
    <ModalHero.Backdrop variant="blur">
      <ModalHero.Container placement="center">
        <ModalHero.Dialog className="sm:max-w-90">
          <ModalHero.CloseTrigger className="bg-red-400 text-white" />
          <ModalHero.Header>
            <ModalHero.Heading>{heading}</ModalHero.Heading>
          </ModalHero.Header>
          <ModalHero.Body>{children}</ModalHero.Body>
          {/* <ModalHero.Footer>
            <Button className="w-full" slot="close">
              Continue
            </Button>
          </ModalHero.Footer> */}
        </ModalHero.Dialog>
      </ModalHero.Container>
    </ModalHero.Backdrop>
  );
}

Modal.Btn = Btn;
Modal.Window = Window;

export default Modal;
