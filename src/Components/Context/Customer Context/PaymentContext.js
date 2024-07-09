import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import PaymentReducer from "../../Reducers/Customer Reducer/PaymentReducer";

const PaymentContext = createContext();

const initialData = {
  OrderId: "",
  CId: "",
  paymentDate: "",
  payId: "",
  Owner: "",
  cardNo: "",
  expMonth: "",
  expYear: "",
  CVV: "",
  DAddr: "",
  submit: false,
  paymentRecords: JSON.parse(localStorage.getItem("paymentInfo")) || [],
  orderDetails: JSON.parse(localStorage.getItem("ordersInfo")) || [],
  updatedRecord: {
    PName: "",
    OrderId: "",
  },
  errors: {
    Owner: "",
    cardNo: "",
    expMonth: "",
    expYear: "",
    CVV: "",
    DAddr: "",
  },
};

const PaymentProvider = ({ children }) => {
  const [paymentState, paymentDispatch] = useReducer(
    PaymentReducer,
    initialData
  );
  const [editStatus, setEditStatus] = useState(false)
  const [status, setStatus] = useState("Pending");
  const handleChange = (e) => {
    paymentDispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
  };
  const validateForm = () => {
    let valid = true;
    if (paymentState?.Owner.trim() === "") {
      paymentDispatch({
        type: "VALIDATE",
        field: "Owner",
        error: "'Card Owner name is required'",
      });
      valid = false;
    } else {
      paymentDispatch({ type: "VALIDATE", field: "Owner", error: "" });
      valid = true;
    }
    if (paymentState?.cardNo.trim() === "") {
      paymentDispatch({
        type: "VALIDATE",
        field: "cardNo",
        error: "Card Number is required",
      });
      valid = false;
    } else if (paymentState?.cardNo?.length < 16) {
      paymentDispatch({
        type: "VALIDATE",
        field: "cardNo",
        error: "Card Number must be 16 digits",
      });
      valid = false;
    } else {
      paymentDispatch({ type: "VALIDATE", field: "cardNo", error: "" });
      valid = true;
    }
    if (paymentState?.expMonth.trim() === "") {
      paymentDispatch({
        type: "VALIDATE",
        field: "expMonth",
        error: "Expiry month is required",
      });
      valid = false;
    } else {
      paymentDispatch({ type: "VALIDATE", field: "expMonth", error: "" });
      valid = true;
    }
    if (paymentState?.expYear.trim() === "") {
      paymentDispatch({
        type: "VALIDATE",
        field: "expYear",
        error: "Expiry year is required",
      });
      valid = false;
    } else {
      paymentDispatch({ type: "VALIDATE", field: "expYear", error: "" });
      valid = true;
    }
    if (paymentState?.CVV.trim() === "") {
      paymentDispatch({
        type: "VALIDATE",
        field: "CVV",
        error: "CVV is required",
      });
      valid = false;
    } else if (paymentState?.CVV?.length < 3 && paymentState?.CVV?.length > 3) {
      paymentDispatch({
        type: "VALIDATE",
        field: "CVV",
        error: "CVV only have 3 digits",
      });
      valid = false;
    } else {
      paymentDispatch({ type: "VALIDATE", field: "CVV", error: "" });
      valid = true;
    }
    if (paymentState?.DAddr.trim() === "") {
      paymentDispatch({
        type: "VALIDATE",
        field: "DAddr",
        error: "Delivery Address is required",
      });
      valid = false;
    } else {
      paymentDispatch({ type: "VALIDATE", field: "DAddr", error: "" });
      valid = true;
    }
    return valid;
  };
  const handleOrderDel = (orderId) => {
    const newCategory = paymentState?.paymentRecords?.filter(
      (item) => item?.OrderId !== orderId
    );
    const newCategory2 = paymentState?.orderDetails?.filter(
      (item) => item?.OrderId !== orderId
    );
    paymentDispatch({
      type: "SUBMIT",
      payload: newCategory,
      orderPayload: newCategory2,
    });
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleStatusUpdate = () => {
    const updatedRecord = paymentState?.orderDetails?.map((element) =>
      element?.map((el) =>
        el?.OrderId === paymentState?.updatedRecord?.OrderId &&
        el?.PName === paymentState?.updatedRecord?.PName
          ? {
              ...el,
              status: status,
            }
          : el
      )
    );
    const existingData = JSON.parse(localStorage.getItem("paymentInfo")) || [];
    paymentDispatch({
      type: "SUBMIT",
      payload: existingData,
      orderPayload: updatedRecord,
    });
    paymentDispatch({ type: "UPDATE_STATUS_VALUES", PName: "", OrderId: "" });
  };
  const handleUpdateValue = (OrderId, PName) => {
    paymentDispatch({ type: "UPDATE_STATUS_VALUES", PName, OrderId });
  };
  const handleStatusClear = () => {
    paymentDispatch({ type: "UPDATE_STATUS_VALUES", PName: "", OrderId: "" });
  };
  const handleOrderSearch = (e) => {
    const filterItems = paymentState?.orderDetails?.filter((element) =>
      element?.map((el) => el?.PName.includes(e.target.value))
    );
  };
  let totalAmount = 0;
  paymentState?.orderDetails?.map((item) => {
    item?.map((ele) => {
      return (totalAmount += parseInt(ele?.total_Price));
    });
  });
  useEffect(() => {
    localStorage.setItem(
      "paymentInfo",
      JSON.stringify(paymentState?.paymentRecords)
    );
    localStorage.setItem(
      "ordersInfo",
      JSON.stringify(paymentState?.orderDetails)
    );
  }, [paymentState?.paymentRecords, paymentState?.orderDetails]);
  const convertToDate = (timeStamp) => {
    // Convert timestamp to a Date object
    const dateObject = new Date(timeStamp);

    // Extract year, month, and day from the Date object
    const year = dateObject.getFullYear();
    const month = ("0" + (dateObject.getMonth() + 1)).slice(-2); // Months are zero-indexed
    const day = ("0" + dateObject.getDate()).slice(-2);

    // Construct the date string in desired format (e.g., YYYY-MM-DD)
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentState,
        paymentDispatch,
        handleStatusClear,
        convertToDate,
        totalAmount,
        handleChange,
        validateForm,
        handleOrderDel,
        handleStatusChange,
        handleStatusUpdate,
        handleUpdateValue,
        handleOrderSearch,
        setEditStatus,
        editStatus
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProvider };
