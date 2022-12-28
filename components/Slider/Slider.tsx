
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from "react";

const VideoList=[
  {
      id:1,
      price:"2.000 ETH",
      musicId:"#1",
      code:"1 of 100",
      time:"1h : 15m :40s",
      images:"/assets/creatorbackground-1.jpeg",
  },
  {
      id:2,
      price:"4.000 ETH",
      musicId:"#2",
      code:"2 of 100",
      time:"1h : 15m :40s",
      images:"/assets/creatorbackground-2.jpeg",
  },
  {
      id:3,
      price:"2.000 ETH",
      musicId:"#3",
      code:"3 of 100",
      time:"1h : 15m :40s",
      images:"/assets/creatorbackground-3.jpeg",
  },
  {
      id:5,
      price:"5.000 ETH",
      musicId:"#5",
      code:"5 of 100",
      time:"1h : 15m :50s",
      images:"/assets/creatorbackground-5.jpg",
  },
  {
      id:4,
      price:"4.000 ETH",
      musicId:"#4",
      code:"4 of 100",
      time:"1h : 15m :40s",
      images:"/assets/creatorbackground-4.jpg",
  },
]



import 'swiper/css/pagination';
import SwiperCore,{Pagination ,Navigation} from "swiper"
SwiperCore.use([Pagination])
import "swiper/css/navigation";

const Slider=() => {
 


  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      pagination={{clickable:true}}
      navigation={true}
      modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="my-10 mySlider"
           breakpoints={{
          50:{
              slidesPerView:1,
          },
          900:{
            slidesPerView:3,
        }}}
      
        >
 

      
   
     
    
      {VideoList.map(({price,musicId,time,images,code}, index) => (
        <SwiperSlide>
       <div className="rounded-2xl  z900  transitionAll p-6   w-full lg:mt-0 mt-12 h-[30rem]">
       
   <img src={images} alt="NFT" className="  -z-[10] rounded-3xl w-full h-[13rem]" />

   <div className="bg-shadowLight  pt-10 px-8   z-50">
         <div className="flex justify-between">
         <div className="flex font-bold text-xl">
              <h1 >NFT Video</h1>
              <p className="">{musicId}</p>
          </div>
       <p>{code}</p>
         
         </div>
         <div className="flex items-center justify-between">
         <div className="border-[1px] border-icons rounded-lg pt-4 pb-1 px-4 mt-8 w-[50%]">
    <div className=" -mt-8 bg-icons text-shadowDark w-24 flex items-center justify-center py-1 rounded-lg">Current Bid</div>
    <span>{price}</span>
</div>
<div className="   bg-shadowLight z-0">
           <div className="">
           <small className="-mb-1">Reaming time</small>
       <h5 className="-mb-1 font-bold">{time}</h5>
       </div>
       </div>
         </div>
       </div>
       </div>
       </SwiperSlide>
            ))}
      
    
    
    </Swiper>
  );
};

export default Slider