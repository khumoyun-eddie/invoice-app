// context/DrawerContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface DrawerContextProps {
  open: boolean;
  content: ReactNode;
  openDrawer: (content: ReactNode) => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

const DrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openDrawer = (content: ReactNode) => {
    setContent(content);
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
    setContent(null);
  };

  return <DrawerContext.Provider value={{ open, content, openDrawer, closeDrawer }}>{children}</DrawerContext.Provider>;
};

const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

export { DrawerProvider, useDrawer };
