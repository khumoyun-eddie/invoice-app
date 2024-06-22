import { useState } from "react";
import { useDrawer } from "../context/DrawerContext";
import { useInvoice } from "../context/InvoiceContext";
import Button from "./Button/Button";
import DropDown from "./Dropdown/Dropdown";
import NewInvoice from "./Invoices/NewInvoice";

export default function AppLayoutPageHeader() {
  const [menuItems, setMenuItems] = useState([
    { label: "Draft", withCheckbox: true, isChecked: false },
    { label: "Pending", withCheckbox: true, isChecked: false },
    { label: "Paid", withCheckbox: true, isChecked: false },
  ]);

  const { openDrawer } = useDrawer();
  const { invoices } = useInvoice();
  const numOfInvoices = invoices.length;

  const handleItemSelect = (label: string) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => (item.label === label ? { ...item, isChecked: !item.isChecked } : item))
    );
  };

  function handleClick() {
    openDrawer(<NewInvoice />);
  }

  return (
    <header className='sticky top-0 flex items-center justify-between w-full gap-10 bg-gray-100'>
      <div className='flex-1'>
        <h1>Invoices</h1>
        <p className='text-gray-300 text-body-1'>
          {numOfInvoices > 0 ? `There are ${numOfInvoices} total invoices` : "No Invoice"}
        </p>
      </div>
      <DropDown buttonLabel='Filter by Status' items={menuItems} onItemSelect={handleItemSelect} />
      <Button buttonType='primaryAdd' type='button' handleClick={handleClick}>
        New Invoice
      </Button>
    </header>
  );
}
