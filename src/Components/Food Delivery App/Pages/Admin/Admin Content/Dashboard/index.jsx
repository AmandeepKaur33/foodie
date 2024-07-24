import React, { useContext } from "react";
import Card from "./Dashboard Cards";
import { CategoryContext } from "../../../../../Context/Admin Context/CategoryContext";
import { ProductContext } from "../../../../../Context/Admin Context/ProductsContext";
import { PaymentContext } from "../../../../../Context/Customer Context/PaymentContext";
import { useAuth } from "../../../../../Context/Authentication Context/Signup";
import { FeedbackContaxt } from "../../../../../Context/Customer Context/FeedbackContext";

const Dashboard = () => {
  const { state , categoryData} = useContext(CategoryContext);
  const { prodState, productsData } = useContext(ProductContext);
  const { feedbackState } = useContext(FeedbackContaxt);
  const { paymentState, totalAmount } = useContext(PaymentContext);
  const { userCount } = useAuth();
  console.log(totalAmount, "ta");
  // let deliveredOrders = 0;
  // let pendingOrders = 0;
  // paymentState?.orderDetails?.map((element) => {
  //   for (let i = 0; i < element?.length; i++) {
  //   if (element[i].status === "Delivered") {
  //     return (deliveredOrders += 1);
  //   } else if (element[i].status === "Pending") {
  //     return (pendingOrders += 1);
  //   }
  // }
  // });
  let deliveredOrders = 0;
let pendingOrders = 0;

paymentState?.orderDetails?.forEach((element) => {
  for (let i = 0; i < element?.length; i++) {
    if (element[i].status === "Delivered") {
      deliveredOrders += 1;
    } else if (element[i].status === "Pending") {
      pendingOrders += 1;
    }
  }
});
  const dashboardList = [
    {
      img: "fa-solid fa-utensils",
      title: "Categories",
      count: state?.categories.length + categoryData.length,
      color: "#4680ff",
      to: "/categories",
    },
    {
      img: "fa-solid fa-pizza-slice",
      title: "Products",
      count: prodState?.products.length + productsData.length,
      color: "#FC6180",
      to: "/products",
    },
    {
      img: "fa-solid fa-hand-holding-dollar",
      title: "Total Orders",
      count: paymentState?.paymentRecords.length,
      color: "#93BE52",
      to: "/orderstatus",
    },
    {
      img: "fa-solid fa-truck",
      title: "Delivered Items",
      count: deliveredOrders,
      color: "#FFB64D",
      to: "/orderstatus",
    },
    {
      img: "fa-solid fa-hourglass-end",
      title: "Pending Items",
      count: pendingOrders,
      color: "#4680ff",
      to: "/orderstatus",
    },
    {
      img: "fa-solid fa-users-line",
      title: "Users",
      count: userCount,
      color: "#FC6180",
      to: "/users",
    },
    {
      img: "fa-solid fa-sack-dollar",
      title: "Sold Amount",
      count: totalAmount,
      color: "#93BE52",
      to: "/report",
    },
    {
      img: "fa-regular fa-comments",
      title: "Feedback",
      count: feedbackState?.feedbackRecords.length,
      color: "#FFB64D",
    },
  ];
  return (
    <div className="w-full h-[calc(100%-12%)] grid grid-flow-dense grid-cols-1 sm:grid-cols-4 items-center py-5 pt-16 pl-5">
      {dashboardList.map((item, index) => (
        <Card key={index} list={item} />
      ))}
    </div>
  );
};

export default Dashboard;
