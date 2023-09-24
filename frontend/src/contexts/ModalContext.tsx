import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
  updateContent: (value: ReactNode) => {},
  content: (<></>) as ReactNode,
  handleClose: () => {},
});

export const ModalContextProvider = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);
  const updateContent = (value: any) => setContent(value);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        updateContent,
        content,
        handleClose,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
