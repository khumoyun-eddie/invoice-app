import { useEffect } from "react";
import { useInvoice } from "../../context/InvoiceContext";
import { Link, useParams } from "react-router-dom";
import InvoiceStatusButton from "../Button/InvoiceStatusButton";
import Button from "../Button/Button";
import iconArrow from "../../assets/icon-arrow-left.svg";
import { formatDateToDayMonthYear } from "../../utils";

export default function InvoiceDetails() {
  const { invoiceId } = useParams<{ invoiceId: string }>();
  const { getInvoice, currentInvoice } = useInvoice();

  useEffect(
    function () {
      if (invoiceId) {
        getInvoice(invoiceId);
      }
    },
    [invoiceId]
  );

  if (!currentInvoice) return null;

  const {
    clientAddress,
    description,
    id,
    clientEmail,
    clientName,
    createdAt,
    paymentDue,
    senderAddress,
    total,
    status,
  } = currentInvoice;

  return (
    <>
      <Link to='..' className='flex items-baseline mb-4 gap-x-3'>
        <img src={iconArrow} alt='' />
        <p className='text-base text-gray-600'>Go back</p>
      </Link>
      <div className='px-8 py-6 mb-4 flex-between main-container'>
        <div className='flex items-center gap-4'>
          <p className='text-base text-gray-300'>Status</p>
          <InvoiceStatusButton status={status} />
        </div>
        <div className='flex gap-x-2'>
          <Button buttonType='edit' type='button'>
            Edit
          </Button>
          <Button buttonType='danger' type='button'>
            Delete
          </Button>
          <Button buttonType='primary' type='button'>
            Mark as Paid
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-4 p-12 auto-rows-min gap-x-12 gap-y-3 main-container'>
        <div className='col-span-1'>
          <h3 className='text-base font-bold'>
            <span className='font-medium text-gray-300'>#</span>
            {id}
          </h3>
          <p className='font-medium text-gray-300 text-body-1'>{description}</p>
        </div>
        <div className='col-start-4'>
          <p className='flex flex-col text-right text-gray-300 text-body-2'>
            <span>{senderAddress.street}</span>
            <span>{senderAddress.city}</span>
            <span>{senderAddress.postCode}</span>
            <span>{senderAddress.country}</span>
          </p>
        </div>
        <div className='col-span-1 row-start-2'>
          <p className='mb-3 font-medium text-gray-300 text-body-1'>Invoice Date</p>
          <h3 className='text-base font-bold'>{formatDateToDayMonthYear(createdAt)}</h3>
        </div>
        <div className='row-start-2 row-end-4'>
          <p className='mb-3 font-medium text-gray-300 text-body-1'>Bill to</p>
          <h3 className='text-base font-bold'>{clientName}</h3>
          <p className='flex flex-col text-gray-300 text-body-2'>
            <span>{clientAddress.street}</span>
            <span>{clientAddress.city}</span>
            <span>{clientAddress.postCode}</span>
            <span>{clientAddress.country}</span>
          </p>
        </div>
        <div>
          <p className='mb-3 font-medium text-gray-300 text-body-1'>Send to</p>
          <h3 className='text-base font-bold'>{clientEmail}</h3>
        </div>
        <div className='col-span-1 row-start-3'>
          <p className='mb-3 font-medium text-gray-300 text-body-1'>Payment Due</p>
          <h3 className='text-base font-bold'>{formatDateToDayMonthYear(paymentDue)}</h3>
        </div>
        <div className='col-span-full'>
          <div className='bg-gray-100 grid grid-cols-[200px_repeat(3, minmax(0, 1fr))]'></div>
          <div className='bg-[#373B53]'></div>
        </div>
      </div>
    </>
  );
}
