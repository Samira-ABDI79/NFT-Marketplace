import {CartList} from "./data";
import { useState } from "react";

import FilterItems from "./filterItems";
const FilterButton=[
    {
        id:1,
        text:" NFTs",
        category:"nft",
    },
    {
        id:2,
        text:" Arts",
        category:"art",
    },
    {
        id:3,
        text:" Musics",
        category:"music",
    },
    {
        id:4,
        text:" Sports",
        category:"sport",
    },{
        id:5,
        text:" Photography",
        category:"photography",
    },
]

function FeaturedNFTs (){
    const [type,setType]=useState("photography")
    const [flterflag,setFilter]=useState(true)
    return (
        <>
        <section className="container">
        <h1 className="text-5xl font-bold "  >Featured NFTs</h1>
              <p className="text-xl mt-6">Discover the most outstanding NFTs in all topics of life.</p>
              <div className="flex my-12 justify-between items-center lg:flex-row flex-col">
                  
              {/* Filter Button */}
              <div className="flex justify-between lg:w-[60%]  lg:flex-wrap flex-wrap">
           {FilterButton.map(({text , category},item) => (
            <button key={item}
            onClick={()=>setType(category)}
             className="filterButton rounded-full px-4 py-2 ">
            {text}</button>
           ))}
             </div>
              {/* Filter icon */}
             <div   className="lg:mt-0 mt-12 flex justify-center items-center gap-1 border border-icons rounded-full boxShadow lg:w-32 w-64 p-2" >
          
                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg>

            
                 
                 <span>Filter</span> 
             {(flterflag) ? 
             <svg onClick={()=>setFilter(false)}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
             :
             <svg onClick={()=>setFilter(true)}   stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
              }
             </div>
              </div>

              <div className="bg-icons w-full h-[1px] my-6"></div>
              {/* Divider */}

              {(flterflag) ? 
              
              
<article className="flex justify-between lg:flex-row flex-col flex-wrap my-20">
   
   {CartList.map(({price,count,time,likeCount,images,image,category}, index) => (
       <div>
           {type==category ? 
               <div className="rounded-2xl  z900  transitionAll p-6   lg:w-[19rem] w-full lg:mt-0 mt-12 h-[30rem]">
          
               <img src={image} alt="NFT" className="   rounded-2xl w-full lg:h-[15rem] h-[15rem] md:h-[20rem]" />
            
              
               <div id="likeCount" className="absolute -mt-[14rem] lg:ml-44 ml-[65%] md:ml-[78%] md:-mt-[18rem] flex text-[18px] bg-icons text-shadowDark  w-16 rounded-full items-center justify-center py-1">
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
               <span className="ml-2">{likeCount}</span>
               </div>
               {/* ///////////////// */}
               <div className="bg-shadowLight pt-10  ">
                     <div className="flex justify-between">
                   
                    <div className="flex">
                    {images.map((item) => (
                
                <img alt="Profile" src={item.image} className="w-7 h-7 rounded-full border border-icons" ></img>
            
                    ))}
                    </div>
                    <span className="ml-2">{count}</span>
                     </div>
                     <div className="flex items-end justify-between">
                     <div className="border-[1px] border-icons rounded-lg pt-4 pb-1 px-4 mt-8 w-[50%]">
                <div className="absolute -mt-8 bg-icons text-shadowDark w-24 flex items-center justify-center py-1 rounded-lg">Curent Bid</div>
                <span>{price}</span>
            </div>
           <div id="time" className="flex items-center">
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-6 h-6"  xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0012 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 007.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
                         <p className="ml-2">{time}</p>
           </div>
                     </div>
                   </div>
                   </div>
            
               : <></>}
       </div>
           
               ))}
   
   </article>

              : 
        <article>
            <FilterItems />
            </article>}
                
        </section>


        </>
    )
}

export default FeaturedNFTs;