import React, { createContext, useContext, useState } from "react";

export const CURRENCIES = [
  { code: "KES", symbol: "KSh", rate: 1, label: "Kenyan Shilling" },
  { code: "USD", symbol: "$", rate: 0.0077, label: "US Dollar" },
  { code: "GBP", symbol: "£", rate: 0.0061, label: "British Pound" },
  { code: "EUR", symbol: "€", rate: 0.0071, label: "Euro" },
];

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currencyCode, setCurrencyCode] = useState("KES");

  const activeCurrency =
    CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];

  function formatPrice(kesPrice) {
    const converted = kesPrice * activeCurrency.rate;

    const formatted =
      currencyCode === "KES"
        ? Math.round(converted).toLocaleString()
        : converted.toFixed(2);

    return `${activeCurrency.symbol} ${formatted}`;
  }

  function convertPrice(kesPrice) {
    return kesPrice * activeCurrency.rate;
  }

  return React.createElement(
    CurrencyContext.Provider,
    {
      value: {
        currencyCode,
        setCurrencyCode,
        activeCurrency,
        formatPrice,
        convertPrice,
        currencies: CURRENCIES,
      },
    },
    children
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);

  if (!ctx) {
    throw new Error(
      "useCurrency must be used inside CurrencyProvider"
    );
  }

  return ctx;
}