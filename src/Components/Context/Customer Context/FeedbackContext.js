import React, { createContext, useEffect, useReducer } from "react";
import FeedbackReducer from "../../Reducers/Customer Reducer/FeedbackReducer";
import { toast } from "react-toastify";

const FeedbackContaxt = createContext();

const initialData = {
  FeedbackId: "",
  FName: "",
  LName: "",
  email: "",
  subject: "",
  message: "",
  feedbackRecords: JSON.parse(localStorage.getItem("Feedback")) || [],
};

const FeedbackProvider = ({ children }) => {
  const [feedbackState, feedbackDispatch] = useReducer(
    FeedbackReducer,
    initialData
  );

  const handleInpChange = (e) => {
    feedbackDispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("Feedback")) || [];
    const payload = [
      ...existingData,
      {
        FeedbackId: Math.floor(Math.random() * 10),
        FName: feedbackState?.FName,
        LName: feedbackState?.LName,
        email: feedbackState?.email,
        subject: feedbackState?.subject,
        message: feedbackState?.message,
      },
    ];
    feedbackDispatch({ type: "SUBMIT", feedbackRecords: payload });
    toast.success(`Your Feedback Submitted Successfully`);
    feedbackDispatch({ type: "SET_CLEAR" });
  };

  useEffect(() => {
    localStorage.setItem(
      "Feedback",
      JSON.stringify(feedbackState?.feedbackRecords)
    );
  }, [feedbackState?.feedbackRecords]);

  const handleFeedbackDelete = (id) => {
    const newCategory = feedbackState?.feedbackRecords?.filter(
      (item) => item?.FeedbackId !== id
    );
    feedbackDispatch({ type: "SUBMIT", feedbackRecords: newCategory });
    toast.warn("item removed ");
  };
  return (
    <FeedbackContaxt.Provider
      value={{
        feedbackState,
        handleInpChange,
        handleFeedbackSubmit,
        handleFeedbackDelete,
      }}
    >
      {children}
    </FeedbackContaxt.Provider>
  );
};

export { FeedbackContaxt, FeedbackProvider };
