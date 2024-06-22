// components/Drawer.tsx
import React from "react";
import { useDrawer } from "../../context/DrawerContext";

const Drawer: React.FC = () => {
  const { open, content, closeDrawer } = useDrawer();

  return (
    <>
      <div
        className={`absolute inset-y-0 left-0 rounded-3xl pl-28 z-40 h-screen overflow-y-auto transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        } bg-white w-[616px]`}
        tabIndex={-1}
      >
        <div className='p-14'>{content}</div>
      </div>
      <div
        className={`absolute inset-0 block transition delay-300 w-screen h-screen bg-gray-600 opacity-50 ${
          open ? "" : "hidden"
        }`}
        onClick={closeDrawer}
      ></div>
    </>
  );
};

export default Drawer;
