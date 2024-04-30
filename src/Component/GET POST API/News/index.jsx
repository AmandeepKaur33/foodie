// import React, { useEffect, useState } from 'react'
// import axios from "axios";


// const GetNews = () => {
//     const [news, setNews] = useState([]);
//   const getNews = () => {
//     axios
//       .get(
//         "https://newsapi.org/v2/everything?q=apple&from=2024-04-07&to=2024-04-07&sortBy=popularity&apiKey=fc4a63aac5484fc39d48ecb2ea84ebdc"
//       )
//       .then((res) => {
//         setNews(res.data.articles);
//         console.log(res.data.articles);
//       });
//   };
//   useEffect(() => {
//     getNews();
//   }, []);
//   return (
//     <div className="bg-slate-200">
//         <div className="grid grid-cols-2  px-16 ml-6 py-10 gap-8 drop-shadow-2xl w-full ">
//         {news.map((item, index) =>
//           news[index] !== news[0] ? (
//             <div className="w-11/12 bg-white rounded-es-[15%] pb-5 rounded-ee-[15%]" key={index}>
//               <div className="w-full h-56 relative flex items-center bg-black justify-center group transition-all">
//                 <img
//                   src={item.urlToImage}
//                   alt={item.source.name}
//                   className="w-full h-full transition-all absolute group-hover:opacity-25 "
//                 />
//                 <h1 className='absolute text-3xl transition-all font-bold text-white group-hover:flex hidden'>{item.source.name}</h1>
//               </div>
//               <div className="px-2 flex  flex-col items-center">
//                 <div >
//                 <h1 className="text-xl mt-2 font-semibold ">{item.title}</h1>
//                 <div className='flex justify-between items-center  text-sm font-medium text-blue-600 border-b border-b-gray-300 pb-2'>
//                 <p className=''>{item.author}</p>
//                 <p>{item.publishedAt}</p>
//                 </div>
//                 <p className='font-medium mt-2'>{item.description}</p>
//                 </div>
//                 <a href={item.url} className='hover:underline bg-indigo-600 text-white py-1 px-4 hover:bg-transparent transition-all mt-5 text-xl hover:text-indigo-600 ' target='_blank'>Read More</a>
//               </div>
//             </div>
//           ) : null
//         )}
//         </div>
//     </div>
//   )
// }

// export default GetNews