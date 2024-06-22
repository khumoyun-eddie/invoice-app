import { ReactNode } from "react";
import iconPlus from "../../assets/icon-plus.svg";

type ButtonProps = {
  children: ReactNode;
  className?: string | null;
  buttonType: string;
  type: "button" | "submit" | "reset";
  handleClick?: () => void | undefined;
};

export default function Button({ children, className, buttonType, type, handleClick, ...others }: ButtonProps) {
  let styles = "flex justify-around items-center font-bold rounded-full py-3 px-5 capitalize ";

  if (buttonType === "primary") styles += "text-white bg-purple hover:bg-purple-light";
  if (buttonType === "primaryAdd") styles += "text-white bg-purple hover:bg-purple-light";
  if (buttonType === "danger") styles += "text-gray-100  bg-red hover:bg-red-light";
  if (buttonType === "edit") styles += "text-gray-400 bg-gray-100 hover:bg-gray-200";
  if (buttonType === "cancel") styles += "text-gray-400 bg-gray-50 bg-gray-700  hover:text-gray-200";

  return (
    <button
      className={`${styles} ${className}`}
      type={type || "button"}
      {...others}
      onClick={() => (handleClick ? handleClick() : undefined)}
    >
      {buttonType === "primaryAdd" ? <img src={iconPlus} className='p-3 mr-2 bg-white rounded-full' alt='' /> : null}
      {children}
    </button>
  );
}
