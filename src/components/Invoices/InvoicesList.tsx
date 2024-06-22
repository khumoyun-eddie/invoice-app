import { useInvoice } from "../../context/InvoiceContext";
import EmptyPage from "../../pages/EmptyPage";
import InvoiceItem from "./InvoiceItem";

export default function InvoicesList() {
  const { invoices } = useInvoice();
  if (!invoices.length) return <EmptyPage />;
  return (
    <div className='flex flex-col flex-grow gap-y-4 '>
      {invoices.map((invoice) => (
        <InvoiceItem invoice={invoice} key={invoice.id} />
      ))}
    </div>
  );
}
