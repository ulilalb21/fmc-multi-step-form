import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPriceString = (amount: number, billing: Billing): string => {
  if (billing === "yearly") {
    return `$${amount}/yr`;
  } else {
    return `$${amount}/mo`;
  }
};
