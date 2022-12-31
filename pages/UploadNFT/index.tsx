
import Button from "../../components/Button";
const collectionlist=[
    {
        id:1,
        icon:"/assets/nft_1.png",
        title:"Sports",
    },
    {
        id:2,
        icon:"/assets/nft-image-2.png",
        title:"Arts",
    },
    {
        id:3,
        icon:"/assets/nft-image-3.png",
        title:"Music",
    },
    {
        id:4,
        icon:"/assets/nft_1.png",
        title:"Digital",
    },
    {
        id:5,
        icon:"/assets/nft-image-2.png",
        title:"Time",
    },
    {
        id:6,
        icon:"/assets/nft-image-3.png",
        title:"Photography",
    },
]
function UploadNFT(){
    return(
        <>
        <section className="container">
            
       <div className=" my-12 container lg:w-[80%]">
       <h1 className="text-5xl font-bold">Create New NFT</h1>
        <p className="text-xl my-6">You can set preferred display name, create your profile URL and manage other personal settings.</p>
        <div className="bg-shadowDark h-[1px] w-full">

        </div>
        <h1 className="text-5xl font-bold my-6">Image, Video, Audio, or 3D Model</h1>
        <p className="text-xl my-6">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
        <div className="bg-shadowDark h-[1px] w-full">

        </div>
        <div className="py-4 border-2  border-dashed border-icons rounded-xl my-10 flex justify-center items-center flex-col">
            <p>JPG, PNG, WEBM , MAX 100MB</p>
            <img src="/assets/upload.png" alt="upload" className="w-24 h-24 "/>

        <p>Drag &amp; drop file</p>
        <p>or Browse media on your device</p>
        </div>
        <form className=" w-full">
                  
                  <div className="flex-col flex" >
                      <label className="text-xl mt-3 font-bold" htmlFor="name">Item Name</label>
                      <input
                      className="border border-icons w-full outline-none bg-shadowLight rounded-2xl px-5 py-2 "
                      
                      type="text" placeholder="shoaib bhai" />
                  </div>
                  <div className="flex-col flex">
                      <label className="text-xl mt-3" htmlFor="website">Website</label>
           <div className="flex items-center">
               <div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
               
               <svg  className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                   <path fill="none" d="M24 24H0V0h24v24z" opacity=".87">
                   </path>
               <path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z">
                   </path>
               </svg>
               </div>
           <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
           type="text" placeholder="website"/>
               </div>
               </div>
                 <p className="lg:text-lg text-xl my-4">Ciscrypt will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                  {/* description */}
           <div className="flex-col flex">
               <label className="text-xl mt-3" htmlFor="description">Description</label>
           <textarea name="" id="" 
               className="border border-icons w-full outline-none bg-shadowLight rounded-2xl px-5 py-2 "                
           
           rows={6}  placeholder="something about yourself in few words">
               </textarea>
           </div>
           <p className="lg:text-lg text-xl my-4">The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
           {/* Choose collection */}
           <section>
               <p className="text-2xl font-bold my-4">Choose collection</p>
               <p className="lg:text-lg text-xl my-4">Choose an exiting collection or create a new one</p>
             
<div className="flex justify-between lg:flex-row flex-col ">
    
{collectionlist.map(({ icon, title }, index) => (
            <div id="cardbox" key={index} className="border border-icons rounded-xl py-6 px-3 lg:w-1/6 lg:h-52 lg:mt-0 mt-10">
              <div className="flex justify-between mb-5">
              <img src={icon} alt={title} className="w-8 h-8 rounded-[50%] " />
           <div id="icon" className="w-8 h-8 bg-icons rounded-[50%] flex justify-center items-center">
           
           <svg className="text-shadowLight" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z">
               </path>
           </svg>
            
           </div>
              </div>
            <div className="text-xl font-bold">
            <p>Crypto Legend - </p>
            <p>{title}</p>
                </div>
            </div>
            ))}
</div>
         
           </section>
           <article>
               <div >
                   <div >
                   <label htmlFor="Royalties">Royalties</label>
               <div >
                   <div >
                   <div className="flex items-center">
               <div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
               
               <svg  className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                   <path d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z">
                   </path>
               </svg>
               </div> </div>
               </div>
               <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
               
               type="text" placeholder="20%"/>
                   </div>
               </div>
               <div >
                   <label htmlFor="size">Size</label>
               <div >
                   <div >
                   <div className="flex items-center">
               <div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
               
               <svg  className="bg-icons text-shadowLight w-6 h-6"stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                   <path fill="none" d="M0 0h24v24H0V0z">
                   </path>
               <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 005 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z">
                   </path>
               </svg>
               </div></div>
               </div>
               <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
               
               type="text" placeholder="165MB"/>
                   </div>
               </div>
               <div >
                   <label htmlFor="Propertie">Propertie</label>
               <div >
                   <div >
                   <div className="flex items-center">
               <div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
               
               <svg  className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                   <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z">
                   </path>
               <path d="M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM593.9 318h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V658c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3L585 323.5a10 10 0 0 1 8.9-5.5z">
                   </path>
               <path d="M438.9 323.5a9.88 9.88 0 0 0-8.9-5.5h-46c-1.7 0-3.3.4-4.8 1.2-4.9 2.7-6.6 8.8-4 13.6l88 161.1H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1c.8-1.5 1.2-3.1 1.1-4.8 0-5.5-4.5-10-10-10h-45a10 10 0 0 0-8.9 5.5l-73.2 144.3-72.9-144.3z">
                   </path>
               </svg>
               </div>
               </div>
               </div>
               <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
               
               type="text" placeholder="Propertie"/>
                   </div>
               </div>
               <div >
                   <label htmlFor="Price">Price</label>
               <div >
                   <div >
                   
                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                   <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z">
                   </path>
               <path d="M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM593.9 318h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V658c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3L585 323.5a10 10 0 0 1 8.9-5.5z">
                   </path>
               <path d="M438.9 323.5a9.88 9.88 0 0 0-8.9-5.5h-46c-1.7 0-3.3.4-4.8 1.2-4.9 2.7-6.6 8.8-4 13.6l88 161.1H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1c.8-1.5 1.2-3.1 1.1-4.8 0-5.5-4.5-10-10-10h-45a10 10 0 0 0-8.9 5.5l-73.2 144.3-72.9-144.3z">
                   </path>
               </svg>
               </div>
               <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
               
               type="text" placeholder="Price"/>
                   </div>
               </div>
               </div>
           </article>
              <Button title="Upload" type="yellow" />
              <Button title="Preview" type="yellow" />

       
                  </form>
       </div>
      
        </section>
        </>
    )
}

export default UploadNFT;