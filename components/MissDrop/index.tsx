const data=[
    {
        id:"01",
        text:"Get more discount"

    },
    {
        id:"02",
        text:"Get premium magazines"

    },
]

function MissDrop (){
    return (
        <>
        <section className="container my-28">
      
        <div className="flex justify-between lg:flex-row flex-col">
            <div className="lg:w-[40%] w-full">
                <h1 className="text-[5rem] font-bold">Never miss a drop</h1>
                <p className="font-bold my-10 text-xl">Subcribe to our super-exclusive drop list and be the first to know abour upcoming drops</p>
                <div className="flex justify-between lg:w-[70%] w-[80%] flex-col">
                {data.map(({ id,text}, index) => (
            <div key={index} className="flex mt-10  items-center">
                <span className="bg-icons text-shadowLight w-16 px-4 py-2 flex items-center justify-center rounded-full">{id}</span>
                <p className="ml-6 text-lg font-bold">{text}</p>
            </div>
            ))}
                </div>
                <div className="mt-10 flex justify-between border-[1px] w-[80%] p-6 border-icons items-center h-20 rounded-full bg-icons">
   <input type="email" placeholder="Enter your email " className="outline-none bg-icons text-shadowLight" />
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-8 h-8 text-shadowLight" xmlns="#">
   <g>
   <path fill="none" d="M0 0h24v24H0z">
   </path>
 <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
   </path>
 </g>
 </svg>
 </div>
            </div>
        <img src="/assets/update.png" alt="NFT" className="lg:w-[60%] w-full lg:mt-0 mt-12" />

        </div>

        </section>
        </>
    )
}

export default MissDrop;