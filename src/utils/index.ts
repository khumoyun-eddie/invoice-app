import { StatusColors } from "../types";

export const prettyCurrency = (amount: number) =>
  parseFloat(amount.toString()).toLocaleString("en-US", {
    style: "currency",
    currency: "GBP",
  });

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

export const colors: StatusColors = {
  pending: ["bg-[#FF8F00]", "text-[#FF8F00]"],
  paid: ["bg-[#33D69F]", "text-[#33D69F]"],
  draft: ["bg-[#373B53]", "text-[#373B53]"],
};

export function formatDateToDayMonthYear(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return dateObj.toLocaleDateString("en-US", options);
}
