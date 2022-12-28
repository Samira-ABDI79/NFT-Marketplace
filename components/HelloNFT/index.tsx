
import Button from "../Button"
const TextNumber=[
    {
    text:"Days",
    number:21,

    },
    {
        text:"Hours",
        number:40,
    
        }
    ,{
        text:"mins",
        number:81,
        
    },{
        text:"secs",
         number:15,
            
    },
]

function HelloNFT(){
    return (
        <>
          <section className="container my-24" >
          <div className="flex lg:flex-row flex-col items-center">

        <div className="lg:w-[40%] lg:absolute lg:z-[100] w-full">
        <div className="rounded-2xl border-icons border p-6 bg-shadowLight">
          <h3 className="text-5xl font-bold text0">Hello NFT</h3>
       

       <div  className="flex justify-between items-center mt-10">
       <img alt="Profile" src="/assets/user-1.png" className="w-16 h-16 rounded-full" />
       
       <div >
         <p>Creator</p>
      <p className="flex items-center">
      <h4>Samira Abdi </h4> <span>
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
         <path fill="none" d="M0 0h24v24H0z">
         </path>
       <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z">
         </path>
       </svg>
       </span>
      </p>
       </div>
      
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"  className="h-10 w-10" >
         <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z">
         </path>
       </svg>
       <div >
         <p>Collection</p>
       <h4>GYm</h4>
       </div>
       </div>
{/* ////Current Bid */}
<div className="border-[3px] border-shadowDark rounded-lg py-7 px-10 mt-8">
    <div className="absolute -mt-10 bg-shadowDark text-icons w-36 flex items-center justify-center py-2 rounded-lg">Current Bid</div>
    <span>00664 ETH $221,21</span>
</div>
{/* //////Time */}
<p className="flex my-8 items-center">
<svg className="w-7 h-7" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0012 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 007.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
<span className="ml-4">Auction ending in</span></p>

{/* //////////Calendar تقویم*/}
<div className="flex justify-between items-center  mt-10 px-4 py-5 rounded-xl lg:w-8/12 w-full mx-1 ">

{TextNumber.map((item) => (
            

            <div className="flex flex-col mr-2 ">
              <p className="font-bold text-center text-3xl my3">{item?.number}</p>
              <p className="text-gray text-center">{item?.text}</p>
              </div>
           
            ))}
 </div>
      <div className="bg-shadowDark h-[1px] w-full my-12"></div>
       <div className="flex justify-center items-center">
       <div className="flex justify-between lg:w-[50%] w-[70%]">
                    <Button title="Place" type="yellow" />
                    <Button title="View" type="yellow" />
                </div>
       </div>
      
      </div>
      <div className="flex justify-between w-24">
        <svg className="bigNFTSliderIcon w-8 h-8" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" >
        <desc></desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3z">
        </path><path d="M21 15v-6"></path>
      <path d="M18 15v-6"></path></svg>
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="bigNFTSliderIcon w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z">
        </path><path d="M3 9v6"> </path></svg>
      </div>
        </div>

        {/* /////image Box Hello NFT */}
            <div className="rounded-2xl border-icons border p-6 lg:w-[60%] lg:z-0 lg:ml-[40%] w-full lg:mt-0 mt-12">
        <img src="/assets/nft_1.png" alt="NFT" className="rounded-2xl w-full" />
        <div className="absolute -mt-[80%] ml-[60%] lg:-mt-[46%] lg:ml-[40%] flex text-[18px] bg-icons text-shadowDark w-24 rounded-full items-center justify-center py-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z">
          </path>
        </svg>
        <span className="ml-2">243</span>
        </div>

            </div>
          </div>
          </section>
        </>
    )
}

export default HelloNFT