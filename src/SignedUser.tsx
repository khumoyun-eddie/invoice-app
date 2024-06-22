import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Homepage from "./pages/Homepage";
import InvoiceDetails from "./components/Invoices/InvoiceDetails";
import { InvoiceProvider } from "./context/InvoiceContext";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

function SignedUser() {
  return (
    <InvoiceProvider>
      <Suspense fallback={<Loader />}>
        <div className='flex flex-col w-screen h-screen font-medium bg-gray-100 tablet:flex-row'>
          <Sidebar />
          <Container>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/invoices/:invoiceId' element={<InvoiceDetails />} />
              <Route path='*' element={<p>Page not found</p>} />
            </Routes>
          </Container>
        </div>
      </Suspense>
    </InvoiceProvider>
  );
}

export default SignedUser;
