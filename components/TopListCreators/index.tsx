const ListCreators =[
    {
        id:1,
        image1:"/assets/creatorbackground-9.jpg",
        image2:"/assets/creatorbackground-2.jpeg",
        image3:"/assets/creatorbackground-3.jpeg",
        image4:"/assets/creatorbackground-4.jpg",
        price:"1.255 ETH",
        profile:"/assets/user-1.png",
    },
    {
        id:2,
        image1:"/assets/creatorbackground-1.jpeg",
        image2:"/assets/creatorbackground-2.jpeg",
        image3:"/assets/creatorbackground-3.jpeg",
        image4:"/assets/creatorbackground-6.jpg",
        price:"1.255 ETH",
        profile:"/assets/user-2.png",
    },
    {
        id:3,
        image1:"/assets/creatorbackground-9.jpg",
        image2:"/assets/creatorbackground-2.jpeg",
        image3:"/assets/creatorbackground-3.jpeg",
        image4:"/assets/creatorbackground-6.jpg",
        price:"1.255 ETH",
        profile:"/assets/user-3.png",
    },
    {
        id:4,
        image1:"/assets/creatorbackground-1.jpeg",
        image2:"/assets/creatorbackground-2.jpeg",
        image3:"/assets/creatorbackground-3.jpeg",
        image4:"/assets/creatorbackground-4.jpg",
        price:"1.255 ETH",
        profile:"/assets/user-4.png",
    },
    {
        id:5,
        image1:"/assets/creatorbackground-1.jpeg",
        image2:"/assets/creatorbackground-2.jpeg",
        image3:"/assets/creatorbackground-11.jpg",
        image4:"/assets/creatorbackground-6.jpg",
        price:"1.255 ETH",
        profile:"/assets/user-5.png",
    },
    {
        id:6,
        image1:"/assets/creatorbackground-1.jpeg",
        image2:"/assets/creatorbackground-2.jpeg",
        image3:"/assets/creatorbackground-11.jpg",
        image4:"/assets/creatorbackground-6.jpg",
        price:"1.255 ETH",
        profile:"/assets/user-6.png",
    },
    {
        id:7,
        image1:"/assets/creatorbackground-1.jpeg",
        image2:"/assets/creatorbackground-2.jpeg",
        image3:"/assets/creatorbackground-11.jpg",
        image4:"/assets/creatorbackground-6.jpg",
        price:"1.255 ETH",
        profile:"/assets/user-7.png",
    },

    // {
    //     id:8,
    //     image1:"/assets/creatorbackground-1.jpeg",
    //     image2:"/assets/creatorbackground-2.jpeg",
    //     image3:"/assets/creatorbackground-11.jpg",
    //     image4:"/assets/creatorbackground-6.jpg",
    //     price:"1.255 ETH",
    //     profile:"/assets/user-8.png",
    // },
]

function TopListCreators (){
    return (
        <>
        <section className="container" >
            <h1 className="text-center text-5xl font-bold text0">Top List Creators</h1>
            <div className="flex justify-center items-center">
                <div className="w-[50%] lg:border border-none border-icons rounded-full px-12 py-5 flex justify-between lg:flex-row flex-col mt-12">
                <button className="ButtonQHarr lg:mt-0 mt-5 text-xl flex justify-between items-center rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="mr-2 w-5 h-5"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z">
                    </path>
                </svg>
                24 hours
                </button>
                <button className="ButtonQHarr lg:mt-0 mt-5 text-xl flex justify-between items-center rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="mr-2 w-5 h-5"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z">
                    </path>
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">
                    </path>
                </svg>
                7 days
                </button>

                <button className="ButtonQHarr lg:mt-0 mt-5 text-xl flex justify-between items-center rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="mr-2 w-5 h-5"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z">
                    </path>
                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z">
                    </path>
                </svg>
                30 days
                </button>
                </div>
            </div>

            {/* Galery */}
            <div className="my-16 flex flex-wrap justify-between">
            {ListCreators.map(({price,image1,image2,image3,image4,profile}, index) => (
                <div key="index" className="lg:w-[31%] w-full rounded-2xl  z900  transitionAll p-6 mt-12">
                    <img src={image1} alt="img1" className="rounded-2xl h-[13rem] w-full"/>
                    <div id="box3image" className="grid grid-cols-3 grid-rows-1 gap-2 mt-2">
                    <img src={image2} alt="img2" className="col-span-1 row-span-1 rounded-bl-2xl"/>
                    <img src={image3} alt="img3" className="col-span-1 row-span-1"/>
                    <img src={image4} alt="img4" className="col-span-1 row-span-1 rounded-br-2xl"/>
                    </div>
                    <h1 className="font-bold text-3xl my-4">Amazing Collection</h1>
                    <div id="priceAvatarBox" className="flex justify-between items-center">
        <img alt="Profile" src={profile} className="w-10 h-10 rounded-full" />
        <p>Creator</p>
       <p className="flex items-center"> <span>Shoaib Bhai</span><small>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path></svg>
        </small></p>
        <button className=" border-[2px] border-icons rounded-xl px-2 py-1">{price}</button>

                    </div>
                </div>
       
            ))}
            </div>

        </section>
        </>
    )
}


export default TopListCreators;