import { useState } from "react"

const AudioList=[
    {
        id:1,
        price:"$3,221.33",
        musicId:"#1123",
        time:"3h : 15m :20s",
        likeCount:"24",
          images:[
            {
                image:"/assets/user-1.png"
            },
            {
                image:"/assets/user-2.png"
            },
            {
                image:"/assets/user-3.png"
            },
            
            {
                image:"/assets/user-4.png"
            },
        ]
    },
    {
        id:2,
        price:"$3,221.33",
        musicId:"#1123",
        time:"3h : 15m :20s",
        likeCount:"24",
          images:[
            {
                image:"/assets/user-1.png"
            },
            {
                image:"/assets/user-2.png"
            },
            {
                image:"/assets/user-3.png"
            },
            
            {
                image:"/assets/user-4.png"
            },
        ]
    }
]
const AudioList2=[
    {
        id:1,
        price:"e1.00",
        musicId:"#1124",
          images:[
            {
                image:"/assets/user-1.png"
            },
            {
                image:"/assets/user-2.png"
            },
            {
                image:"/assets/user-3.png"
            },
            
            {
                image:"/assets/user-4.png"
            },
        ]
    },
    {
        id:2,
        price:"e1.00",
        musicId:"#1124",
          images:[
            {
                image:"/assets/user-1.png"
            },
            {
                image:"/assets/user-2.png"
            },
            {
                image:"/assets/user-3.png"
            },
            
            {
                image:"/assets/user-4.png"
            },
        ]
    },
    {
        id:3,
        price:"e1.00",
        musicId:"#1124",
          images:[
            {
                image:"/assets/user-1.png"
            },
            {
                image:"/assets/user-2.png"
            },
            {
                image:"/assets/user-3.png"
            },
            
            {
                image:"/assets/user-4.png"
            },
        ]
    }
]
function AudioCollection (){
    const [like,setLike]=useState(false);
    return(
        <>
        <section className="container my-12">
            <h1 className="text-5xl font-bold text0">Audio Collection</h1>
            <p className="text-xl mb-12 mt-8">Discover the most outstanding NFTs in all topics of life.</p>

<article className="flex justify-between lg:flex-row flex-col">
    
{AudioList.map(({price,musicId,time,likeCount,images}, index) => (
       <div className="rounded-2xl  z900  transitionAll p-6 lg:w-[30%]   w-full lg:mt-0 mt-12 h-[30rem]">
       <div className="AudioCardboxtime  absolute bg-shadowLight lg:ml-[7%] lg:-mt-2 ml-[18%] z-0">
           <div className="boxtime_remaing">
           <small className="-mb-1">Reaming time</small>
       <h5 className="-mb-1">{time}</h5>
       </div>
       </div>
   <img src="/assets/creatorbackground-10.jpg" alt="NFT" className="absolute  -z-[10] rounded-t-2xl w-[22rem] h-[27rem]" />

   <div id="videoIcon" className=" absolute lg:mt-[12%] lg:ml-[18%] mt-[44%] ml-[50%] md:mt-[34%] md:ml-[30%]  w-16 h-16 bg-icons p-4 rounded-[50%] flex items-center justify-center">
   <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" className="text-shadowLight w-6 h-6" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg>
   </div>
   <div className="absolute lg:ml-2 lg:mt-1 mt-2 ml-2 flex text-[18px] bg-icons text-shadowDark lg:w-20 w-16 rounded-full items-center justify-center py-2">
 {like ? <svg onClick={()=>setLike(false)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path></svg>:<></>}
  {!like ? <svg onClick={()=>setLike(true)} stroke="currentColor" fill="currentColor" stroke-width="0"  viewBox="0 0 1024 1024"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>:<></>} 
   <span className="ml-2">24</span>
   </div>
   {/* ///////////////// */}
   <div className="bg-shadowLight w-[90%] pt-10 px-8 rounded-tr-3xl lg:mt-[80%] mt-[77%] md:mt-[40%] z-50">
         <div className="flex justify-between">
         <div className="flex font-bold text-xl">
              <h1 >NFT music</h1>
              <p className="">{musicId}</p>
          </div>
        <div className="flex">
        {images.map((item) => (
    
    <img alt="Profile" src={item.image} className="w-7 h-7 rounded-full border border-icons" ></img>

        ))}
        </div>
       
         </div>
         <div className="flex items-center justify-between">
         <div className="border-[1px] border-icons rounded-lg pt-4 pb-1 px-4 mt-8 w-[50%]">
    <div className="absolute -mt-8 bg-icons text-shadowDark w-24 flex items-center justify-center py-1 rounded-lg">Price</div>
    <span>{price}</span>
</div>
             <p>24 in stock</p>
         </div>
       </div>
       </div>

            ))}

            {/* Gray Box 1142 */}
            <div className="lg:w-[25rem] lg:h-[27rem] flex flex-col justify-between">
 
            {AudioList2.map(({price,musicId,images}, index) => (
       <div className=" flex justify-between items-center rounded-2xl  z900  transitionAll p-6    w-full lg:mt-0 mt-12 bg-shadowDark" key={index}>
      
   <img src="/assets/creatorbackground-1.jpeg" alt="NFT" className="w-16 h-16 rounded-xl " />

  
   
        <div className="flex flex-col ">
            
         <div className="flex font-bold text-xl">
              <h1 >NFT music</h1>
              <p className="">{musicId}</p>
          </div>
       
       
        
         <div className="flex items-center justify-between mt-4">
         <div className="flex">
        {images.map((item) => (
    
    <img alt="Profile" src={item.image} className="w-6 h-6 rounded-full border border-icons" ></img>

        ))}
        </div>
         <div className="border-[1px] border-icons rounded-lg pt-1 pb-1 px-1 lg:ml-6  ml-8 w-[50%]">
    <div className="absolute -mt-6 bg-icons text-shadowDark w-20 flex items-center justify-center py-1 rounded-lg">Price</div>
    <span>{price}</span>
</div>
            
         </div>
        </div>
        <div id="videoIcon" className="  w-16 h-16 bg-icons p-4 rounded-[50%] flex items-center justify-center">
   <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" className="text-shadowLight w-6 h-6" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg>
   </div>
  
       </div>
   

            ))}
            </div>
</article>
            
            
        </section>
        </>
    )
}


export default AudioCollection

