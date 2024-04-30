
import React, { useEffect, useState } from 'react'
import axios from "axios";
import NewsItems from './News component';
import NewsList from './News component/News dropdown list';

const GetNews = () => {
  // const [more, setMore] = useState(false)
    const [news, setNews] = useState([]);
    const [search,setSearch] = useState([])
    // const [show,setShow] = useState(false)
    // const btns = [
    //   {
    //     name: "All"
    //   },
    //   {
    //     name: "Digital Trends"
    //   },
    //   {
    //     name: "MacRumors"
    //   },
    //   {
    //     name: "Forbes"
    //   },
    // ]
 const newArr = [...new Set(news?.map((a)=>a.source.name))]
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2024-04-07&to=2024-04-07&sortBy=popularity&apiKey=fc4a63aac5484fc39d48ecb2ea84ebdc"
      )
      .then((res) => {
        // setNews(res?.data?.articles);
        setNews(res?.data?.articles?.filter((item)=> item?.content !== "[Removed]" ))
        // setNews([...new Set(news?.map((a)=>a.source.name))])
        // console.log(res?.data?.articles);
        console.log("record ", res);
        // console.log([...new Set(news?.map((a)=>a.source.name))]);
      });
  };
// const Filter = (e) => {
//   setNews(news.filter(value => value?.source?.name?.toLowerCase().includes(e.target.value)))
// }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="bg-white">
      <div className='flex items-center justify-evenly py-2 bg-slate-100  w-full'>
         {/* {btns.map((item,index)=>(
          <button  className='px-5 py-1 bg-indigo-500 text-white text-xl font-semibold' key={index}>{item.name}</button>
         ))} */}
         <input onChange={(e) => setSearch((e.target.value).toLowerCase())} placeholder='Search news' className='w-2/3 border border-gray-600 py-1 px-3'/>
         <select onChange={(e)=>  setSearch((e.target.value))} className='px-3 py-1'>
          <option>~SELECT ONE~</option>
         {newArr.map((a)=>(
          <NewsList name={a} />
         ))}
         </select>
         {/* {btns.map((item,index)=>(
          <button className=' border border-indigo-500 text-indigo-500 py-1 px-3 font-semibold text-xl' onClick={()=>setNews( item?.name === "All" ? [...news] : news.filter(value => value?.source?.name === item?.name))} key={index}>{item?.name}</button>
         ))} */}
      </div>
        <div className="grid grid-cols-2  px-16 ml-2 py-10 gap-6 drop-shadow-2xl w-full ">
          {/* {news?.filter((value)=> search 
          ? value?.title?.toLowerCase()?.includes(search?.toLowerCase()) 
          : true).map((item,index)=>(
            <NewsItems list={item}  key={index} />
          ))} */}
          {/* {news?.filter((value) => 
        search 
        ?
      value?.title?.toLowerCase()?.includes(search?.toLowerCase())
      : true
          )?.map((item) => (
            <NewsItems list={item} />
          )
        )
      } */}
      {news
          ?.filter((content) =>
            search
              ? content?.title?.toLowerCase()?.includes(search) || content?.source?.name?.includes(search)
              : true
          )
          ?.map((element) => {
            return (
              <NewsItems list={element} />
          )
        })
      }
        </div>
    </div>
  )
}

export default GetNews
