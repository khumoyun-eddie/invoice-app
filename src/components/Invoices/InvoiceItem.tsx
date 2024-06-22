import { Link } from "react-router-dom";
import { InvoiceItemProps } from "../../types";
import { prettyCurrency } from "../../utils";
import InvoiceStatusButton from "../Button/InvoiceStatusButton";

export default function InvoiceItem({ invoice }: { invoice: InvoiceItemProps }) {
  const { clientName, id, total, status, paymentDue } = invoice;

  return (
    <Link className='flex items-center justify-around w-full py-4 bg-white rounded-lg' to={id}>
      <p className='font-bold text-body-1'>
        <span className='font-medium text-gray-400'>#</span>
        {id}
      </p>
      <p className='text-gray-400 text-body-1'>{paymentDue.toString()}</p>
      <p className='text-gray-400 text-body-1'>{clientName}</p>
      <p className='text-base font-bold'>{prettyCurrency(total)}</p>
      <InvoiceStatusButton status={status} />
    </Link>
  );
}
