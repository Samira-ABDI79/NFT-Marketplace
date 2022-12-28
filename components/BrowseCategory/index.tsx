const CategoryList =[
    {
        id:1,
        image:"/assets/creatorbackground-9.jpg",
        topic:"Dance Monkey",
        count:"1995",
     
    },
    {
        id:2,
        image:"/assets/creatorbackground-6.jpg",
        topic:"Sports",
        count:"2995",
     
    },  {
        id:3,
        image:"/assets/creatorbackground-7.jpg",
        topic:"Entirtment Art",
        count:"3995",
     
    },  {
        id:4,
        image:"/assets/creatorbackground-4.jpg",
        topic:"Time Life",
        count:"4998",
     
    },  {
        id:5,
        image:"/assets/creatorbackground-5.jpg",
        topic:"Animals Art",
        count:"5998",
     
    },  {
        id:6,
        image:"/assets/creatorbackground-6.jpg",
        topic:"Music",
        count:"6998",
     
    },  {
        id:7,
        image:"/assets/creatorbackground-5.jpg",
        topic:"Digital Arts",
        count:"7998",
     
    },  {
        id:8,
        image:"/assets/creatorbackground-4.jpg",
        topic:"Hubby",
        count:"8998",
     
    },  {
        id:9,
        image:"/assets/creatorbackground-1.jpeg",
        topic:"Bad Arts",
        count:"9995",
     
    },  {
        id:10,
        image:"/assets/creatorbackground-2.jpeg",
        topic:" Arts",
        count:"1000",
     
    },  {
        id:11,
        image:"/assets/creatorbackground-3.jpeg",
        topic:"My Fav",
        count:"1110",
     
    }
]
function BrowseCategory(){
    return(
        <>
          {/* Galery */}
          <section className="container" >
              <h1 className="text-6xl font-bold"  >Browse by category</h1>
              <p className="text-xl mt-6">Explore the NFTs in the most featured categories.</p>
              <div className="my-16 flex flex-wrap justify-between">
            {CategoryList.map(({image,topic,count,}, index) => (
                <div key="index" className="lg:w-[16%] w-full rounded-2xl  z900  transitionAll p-6 mt-12">
                    <img src={image} alt="img1" className="rounded-2xl lg:h-[7rem] h-[12rem] w-full"/>
                    <div className="flex justify-between items-center mt-6">
                        <div className="w-12 h-12 bg-icons rounded-[50%] "></div>
                        <div className="flex flex-col justify-between">
                            <p className="font-bold">{topic}</p>
                            <p>{count} NFTS</p>
                        </div>
                        </div>
                    
       
                </div>
       
            ))}
            </div>
          </section>
        

        </>
    )
}

export default BrowseCategory;