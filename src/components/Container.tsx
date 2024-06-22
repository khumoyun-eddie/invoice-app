import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className=' flex-1 px-[3rem] portrait:px-6 mt-[4.5rem]  overflow-y-auto laptop:max-w-[730px] mx-auto'>
      {children}
    </div>
  );
}

export default Container;
