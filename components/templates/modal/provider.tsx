"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useTransition,
} from "react";
import Modal from ".";

interface ModalContextProps<T = any> {
  openModal: (content: ReactNode, type?: ModalType) => void;
  openSheet: (content: ReactNode, type?: ModalType) => void;
  close: (callBack?) => void;
  data: DataType & T;
  opened?: boolean;
  setShowModal;
  loading;
  startTransition;
}
export type ModalType = "modal" | "sheet";
const ModalContext = createContext<ModalContextProps | undefined>(undefined);
type DataType = { type?: ModalType; _data? };
export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<DataType>({
    type: "modal",
  });
  const [loading, startTransition] = useTransition();
  const show = (content: ReactNode, type: ModalType = "modal", extras = {}) => {
    setModalContent(content);
    setShowModal(true);
    setData({
      type,
      ...extras,
    });
  };

  const close = (callBack?) => {
    setShowModal(false);
    setTimeout(() => {
      setModalContent(null);
      callBack && callBack();
    }, 300); // Adjust this timeout as per your transition duration
  };

  return (
    <ModalContext.Provider
      value={{
        loading,
        startTransition,
        close,
        setShowModal,
        data,
        opened: showModal,
        openModal(content: ReactNode, extras: any = {}) {
          show(content, "modal", extras);
        },
        openSheet(content: ReactNode, extras: any = {}) {
          show(content, "sheet", extras);
        },
      }}
    >
      {children}
      {showModal && (
        <Modal
          showModal={showModal}
          type={data.type || "modal"}
          setShowModal={setShowModal}
        >
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

export function useModal<T>() {
  return useContext<ModalContextProps<T>>(ModalContext as any);
}
