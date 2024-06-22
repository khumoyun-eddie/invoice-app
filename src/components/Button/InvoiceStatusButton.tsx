import { colors } from "../../utils";

type InvoiceStatusButtonProps = {
  status: string;
};

export default function InvoiceStatusButton({ status }: InvoiceStatusButtonProps) {
  const [bgColor, textColor] = colors[status];
  return (
    <div
      className={`${bgColor} ${textColor} w-[6.5rem] rounded-md bg-opacity-5 py-3 text-center text-xs font-bold capitalize`}
    >
      <span className={`${bgColor} mr-2 inline-block h-2 w-2 rounded-full`}></span>
      {status}
    </div>
  );
}
``;
