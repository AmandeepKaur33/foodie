import React, { useEffect, useState } from "react";
import Readmore from "./Read More";

const NewsItems = ({ list }) => {
  const [more, setMore] = useState(false);
  // const [length,setLength] = useState()
  const [show, setShow] = useState(false);
  // const ref = useRef(null)
  useEffect(() => {
    // setLength(list.description)
    // console.log(length);
    if (!list?.description.endsWith(".")) {
      setShow(true);
    }
  }, []);
  // const toggleMore = () => {
  //   setMore(!more)
  // }
  return (
    <div className="w-11/12 bg-white h-[80vh]  pb-5 ">
      <div className="w-full h-56 relative flex items-center bg-black justify-center group transition-all">
        <img
          src={list?.urlToImage}
          alt={list?.source.name}
          className="w-full h-full transition-all absolute group-hover:opacity-25 "
        />
        <h1 className="absolute text-3xl transition-all font-bold text-white flex-col items-center group-hover:flex hidden">
          {list?.source.name}
          <span>
            <a
              className="text-lg font-medium underline text-indigo-500"
              href={list?.url}
              target="_blank"
            >
              More Information
            </a>
          </span>
        </h1>
      </div>
      <div className="px-2 flex  flex-col items-center">
        <div>
          <h1 className="text-xl mt-2 font-semibold ">{list?.title}</h1>
          <div className="flex justify-between items-center  text-sm font-medium text-blue-600 border-b border-b-gray-300 pb-2">
            <p className="">{list?.author}</p>
            <p>{list?.publishedAt}</p>
          </div>
          <Readmore text={list.description} maxLength={80} />
        </div>
        {/* <a href={list?.url} className='hover:underline bg-indigo-600 text-white py-1 px-4 hover:bg-transparent transition-all mt-5 text-xl hover:text-indigo-600 ' target='_blank'>Read More</a> */}
      </div>
    </div>
  );
};

export default NewsItems;
// ?userId=${userId}