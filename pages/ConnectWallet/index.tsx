

const ConnectWalletList=[
    {
        id:1,
        title:"Metamask",
        image:"/assets/provider-1.png",
    
    },
    {
        id:2,
        title:"walletConnect",
        image:"/assets/provider-2.png",
       
    },
    {
        id:3,
        title:"walletlink",
        image:"/assets/provider-3.png",
       
    },
    {
        id:4,
        title:"Formatic",
        image:"/assets/provider-1.png",
       
    },
]
function ConnectWallet(){
    return(
        <>
        <section className="container">
            
       <div className=" my-12 container lg:w-[70%]">
       <h1 className="text-5xl font-bold">Connect your wallet</h1>
        <p className="text-xl my-6">Connect with one of our avaliabl wallet providers or create a new one</p>
        <div className="bg-shadowDark h-[1px] w-full"></div>
       </div>
       <div className="container  mt-20 mb-32 lg:w-[70%] ">
       <div className=" py-4 px-2 text-lg   flex justify-between  flex-col " >
            {ConnectWalletList.map(({title,image}, index) => (
             <div className="flex bigNFTSliderIcon items-center border p-6 hover:bg-shadowDark border-icons rounded-xl w-full lg:h-[6rem] h-auto  mt-12" key={index}>
                <img src={image} alt={title} className="w-12 h-12"/>
                <p className="text-xl ml-12">{title}</p>

             </div>
            ))}
          </div>
       </div>
        </section>
        </>
    )
}

export default ConnectWallet;