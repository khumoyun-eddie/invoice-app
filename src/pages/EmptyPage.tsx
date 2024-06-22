import emptyIcon from "../assets/empty-dashboard-email.svg";

export default function EmptyPage() {
  return (
    <div className='pt-[8.8rem] flex flex-col items-center justify-center'>
      <div className='mb-16'>
        <img src={emptyIcon} alt='' />
      </div>
      <div className='text-center'>
        <h2>There is nothing here</h2>
        <p className='mt-6 font-medium text-gray-300 text-body-1'>
          Create an invoice by clicking the <br />
          New Invoice button and get started
        </p>
      </div>
    </div>
  );
}
