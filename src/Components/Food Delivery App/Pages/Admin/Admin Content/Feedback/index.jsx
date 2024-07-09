import React, { useContext } from "react";
import { FeedbackContaxt } from "../../../../../Context/Customer Context/FeedbackContext";

const Feedback = () => {
  const { feedbackState, handleFeedbackDelete } = useContext(FeedbackContaxt);
  return (
    <div className="w-full h-[calc(100vh-20vh)] flex gap-6  bg-white px-6 py-12 my-1 mx-auto ">
      <div className="w-full h-full pr-4 overflow-auto">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          Feedback List
        </h1>
        <div>
          <table className="w-full text-left mt-6">
            <tr className="my-32 border-y border-b-2 w-full  shadow-xl">
              <th className="py-3 px-3 text-center ">SrNo</th>
              <th className="py-3 px-3 ">Name</th>
              <th className="py-3 px-3 ">Email</th>
              <th className="py-3 px-3 ">Subject</th>
              <th className="py-3 px-3 ">Message</th>
              <th colSpan="2" className="py-3 px-3  ">
                Action
              </th>
            </tr>

            <tbody className="">
              {feedbackState?.feedbackRecords ? (
                feedbackState?.feedbackRecords?.map((item, index) => (
                  <tr className="border-b" key={item?.FeedbackId}>
                    <td className=" py-4 px-3 text-center text-gray-500 font-semibold">
                      {index + 1}
                    </td>
                    <td className=" py-4 px-3 text-gray-500 font-semibold">
                      {item?.FName} {item?.LName}
                    </td>
                    <td className=" py-4 px-3 text-gray-500 font-semibold">
                      {item?.email}
                    </td>
                    <td className=" py-4 px-3 text-gray-500 font-semibold">
                      {item?.subject}
                    </td>
                    <td className=" py-4 px-3 text-gray-500 font-semibold">
                      {item?.message}
                    </td>
                    <td className="py-4 mt-3 px-3 text-gray-500 font-semibold ">
                      <i
                        onClick={() => handleFeedbackDelete(item?.FeedbackId)}
                        className="fa-solid fa-trash bg-[#FC6180] px-3 py-1 text-xs rounded-xl text-white "
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="w-full h-[20vh] flex items-center justify-center">
                  No Feedback Available
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
