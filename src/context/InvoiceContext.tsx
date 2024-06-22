import { createContext, useContext, useEffect, useState } from "react";
import { InvoiceContextProps, InvoiceItemProps, InvoiceProviderProps } from "../types";

const InvoiceContext = createContext<InvoiceContextProps | undefined>(undefined);

const BASE_URL = "http://localhost:9000";

function InvoiceProvider({ children }: InvoiceProviderProps) {
  const [invoices, setInvoices] = useState<InvoiceItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState<InvoiceItemProps | null>(null);

  useEffect(() => {
    async function fetchInvoices(BASE_URL: string) {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/invoices`);
        if (!res) throw new Error("Cannot fetch invoices");
        const data = await res.json();
        setInvoices(data);
      } catch (error) {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchInvoices(BASE_URL);
  }, []);

  async function getInvoice(invoiceId: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/invoices/${invoiceId}`);
      const data = await res.json();
      setCurrentInvoice(data);
    } catch (error) {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <InvoiceContext.Provider value={{ isLoading, invoices, getInvoice, currentInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
}

function useInvoice() {
  const context = useContext(InvoiceContext);
  if (context === undefined) throw new Error("InvoiceContext was used outside the Provider");
  return context;
}

export { InvoiceProvider, useInvoice };
