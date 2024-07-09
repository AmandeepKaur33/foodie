import React, { createContext, useContext, useState } from "react";
import { PaymentContext } from "../Customer Context/PaymentContext";

const ReportContext = createContext();

const ReportProvider = ({ children }) => {
  const [timeInterval, setTimeInterval] = useState({
    fromDate: "",
    toDate: "",
  });
  const { paymentState } = useContext(PaymentContext);
  const handleSearchOrder = () => {
    for (let i = 0; i < paymentState?.paymentRecords.length; i++) {
      var dateFrom = "21-06-2024";
      var dateTo = "30-06-2024";
      var dateCheck = "25-06-2024";

      var d1 = dateFrom.split("-");
      var d2 = dateTo.split("-");
      var c = dateCheck.split("-");

      var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
      var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
      var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
    }
  };
  return (
    <ReportContext.Provider
      value={{ timeInterval, setTimeInterval, handleSearchOrder }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export { ReportContext, ReportProvider };
