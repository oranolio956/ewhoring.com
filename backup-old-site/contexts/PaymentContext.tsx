import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PaymentContextType {
  isPaymentOpen: boolean;
  openPayment: () => void;
  closePayment: () => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const openPayment = () => setIsPaymentOpen(true);
  const closePayment = () => setIsPaymentOpen(false);

  return (
    <PaymentContext.Provider value={{ isPaymentOpen, openPayment, closePayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};

