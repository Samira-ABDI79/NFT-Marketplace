const FilterButton=[
    {
        id:1,
        text:" NFTs",
    },
    {
        id:2,
        text:" Arts",
    },
    {
        id:3,
        text:" Musics",
    },
    {
        id:4,
        text:" Sports",
    },{
        id:5,
        text:" Photography",
    },
]

function FeaturedNFTs (){
    return (
        <>
        <section className="container">
        <h1 className="text-5xl font-bold "  >Featured NFTs</h1>
              <p className="text-xl mt-6">Discover the most outstanding NFTs in all topics of life.</p>
              <div className="flex my-12 justify-between items-center">
                  
              {/* Filter Button */}
              <div className="flex justify-between lg:w-[60%]">
           {FilterButton.map(({text},item) => (
            <button key={item} className="filterButton rounded-full px-4 py-2 ">{text}</button>
           ))}
             </div>
              {/* Filter icon */}
             <div className="flex justify-center items-center gap-1 border border-icons rounded-full boxShadow w-32 p-2" >
                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg>
                 <span>Filter</span> 
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
             </div>
              </div>

              <div className="bg-icons w-full h-[1px] my-6"></div>
              
        </section>


        </>
    )
}

export default FeaturedNFTs;