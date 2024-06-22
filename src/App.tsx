import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { InvoiceProvider } from "./context/InvoiceContext";
import { AuthProvider } from "./context/AuthContext.tsx";

import Loader from "./components/Loader/Loader";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import InvoiceDetails from "./components/Invoices/InvoiceDetails.tsx";
import InvoicesList from "./components/Invoices/InvoicesList.tsx";
import { DrawerProvider } from "./context/DrawerContext.tsx";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login.tsx"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  return (
    <AuthProvider>
      <InvoiceProvider>
        <DrawerProvider>
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path='product' element={<Product />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='login' element={<Login />} />
                <Route
                  path='app'
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to='invoices' />} />
                  <Route path='invoices' element={<InvoicesList />} />
                  <Route path='invoices/:invoiceId' element={<InvoiceDetails />} />
                </Route>

                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </DrawerProvider>
      </InvoiceProvider>
    </AuthProvider>
  );
}

{
  /* <div className='flex flex-col w-screen h-screen font-medium bg-gray-100 tablet:flex-row'>
<Sidebar />
<Container>
<Routes>
<Route path='/' element={<Homepage />} />
<Route path='/invoices/:invoiceId' element={<InvoiceDetails />} />
<Route path='*' element={<p>Page not found</p>} />
</Routes>
</Container>
</div> */
}
