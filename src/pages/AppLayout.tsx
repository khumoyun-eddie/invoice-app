import { Outlet, useLocation } from "react-router-dom";
import { useInvoice } from "../context/InvoiceContext";
import AppLayoutPageHeader from "../components/AppLayoutPageHeader";
import Loader from "../components/Loader/Loader";
import Sidebar from "../components/Sidebar";
import Drawer from "../components/Drawer/Drawer";
// import Container from "../components/Container";

export default function AppLayout() {
  const { isLoading } = useInvoice();
  const location = useLocation();
  const isHome = location.pathname === "/app/invoices";
  return (
    <div className='relative flex flex-col w-screen h-screen font-medium bg-gray-100 tablet:flex-row'>
      <Sidebar />
      <div className='static flex gap-y-10 flex-col flex-1 px-[3rem] portrait:px-6 mt-[4.5rem] laptop:max-w-[730px] mx-auto overflow-y-auto'>
        {isHome && <AppLayoutPageHeader />}
        {isLoading && <Loader />}
        <Drawer />
        <Outlet />
      </div>
    </div>
  );
}
