import { ReactNode } from "react";

//* ============ Invoice Types
export interface InvoiceAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface InvoicedItem {
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export type InvoiceItemProps = {
  status: string;
  id: string;
  description: string;
  clientName: string;
  clientEmail: string;
  total: number;
  paymentDue: string;
  createdAt: string;
  paymentTerms: number;
  clientAddress: InvoiceAddress;
  senderAddress: InvoiceAddress;
  items: InvoicedItem[];
};

export type InvoicesListProps = {
  invoices: InvoiceItemProps[];
};

export type InitialStateProps = {
  invoices: InvoiceItemProps[];
  isLoading: boolean;
  getInvoice: (invoiceId: string) => void;
  currentInvoice: InvoiceItemProps | null;
};

export interface InvoiceProviderProps {
  children: ReactNode;
}

export interface InvoiceContextProps {
  invoices: InvoiceItemProps[];
  isLoading: boolean;
  getInvoice: (invoiceId: string) => Promise<void>;
  currentInvoice: InvoiceItemProps | null;
}

export interface InvoiceDetailsParams {
  invoiceId: string;
}

//* ================== Auth Types
interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface AuthInitialStateProps {
  user: User | null;
  isAuthenticated: boolean;
}

export interface LoginAction {
  type: "login";
  payload: User;
}

export interface LogoutAction {
  type: "logout";
}

export type AuthAction = LoginAction | LogoutAction;

export interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

//* ================ Dropdown Component
export interface DropDownItem {
  label: string;
  withCheckbox?: boolean;
  isChecked?: boolean;
}

export interface DropDownProps {
  buttonLabel: string;
  items: DropDownItem[];
  onItemSelect?: (label: string) => void;
}

//* =============== Button component
export type StatusColors = {
  pending: string[];
  paid: string[];
  draft: string[];
};
