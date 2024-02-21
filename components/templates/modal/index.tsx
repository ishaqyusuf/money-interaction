"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalType, useModal } from "./provider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { PrimitiveDivProps } from "@radix-ui/react-dialog";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function BaseModal({
  children,
  showModal,
  setShowModal,
  type,
}: {
  children: React.ReactNode;
  showModal: boolean;
  type: ModalType;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal]
  );
  const Modal = type == "modal" ? Dialog : Sheet;
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <>
      {showModal && (
        <>
          {
            <>
              <Modal open={showModal} onOpenChange={setShowModal}>
                {/* <ModalContent> {children}</ModalContent> */}
                {children}
              </Modal>
            </>
          }
        </>
      )}
    </>
  );
}
const contentVariants = cva(``, {
  variants: {
    size: {
      sm: "",
      xl: "",
      lg: "",
      "2xl": "",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});
interface ContentProps
  extends PrimitiveDivProps,
    VariantProps<typeof contentVariants> {}
function Content({ children, size }: ContentProps) {
  const modal = useModal();
  const Content = modal?.data?.type == "modal" ? DialogContent : SheetContent;

  return (
    <Content className={cn(contentVariants({ size }))}>{children}</Content>
  );
}

interface HeaderProps {
  title?: string;
  subtitle?: string | null;
}
function Header({ title, subtitle }: HeaderProps) {
  const modal = useModal();
  const isModal = modal?.data?.type == "modal";
  const [Header, Title, Subtitle] = isModal
    ? [DialogHeader, DialogTitle, DialogDescription]
    : [SheetHeader, SheetTitle, SheetDescription];
  return (
    <Header>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Header>
  );
}
interface FooterProps extends PrimitiveDivProps {
  onSubmit?;
  onCancel?;
  submitText?: string;
  cancelBtn?: boolean;
  cancelText?: string;
}
function Footer({
  children,
  onSubmit,
  onCancel,
  submitText = "Submit",
  cancelBtn,
  cancelText = "Cancel",
}: FooterProps) {
  const modal = useModal();
  const isModal = modal?.data?.type == "modal";
  const [Footer] = isModal ? [DialogFooter] : [SheetFooter];
  return (
    <Footer>
      {children}
      {(onSubmit || cancelBtn) && (
        <div className="flex justify-end space-x-4">
          {cancelBtn && (
            <Button
              variant={"secondary"}
              onClick={() => {
                onCancel ? onCancel() : modal?.close();
              }}
            >
              {cancelText}
            </Button>
          )}
          {onSubmit && (
            <Button onClick={() => modal?.startTransition(onSubmit)}>
              {submitText}
            </Button>
          )}
        </div>
      )}
    </Footer>
  );
}
export default Object.assign(BaseModal, {
  Content,
  Header,
  Footer,
});
