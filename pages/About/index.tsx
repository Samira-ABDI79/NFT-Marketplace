import EarnFree from "../../components/EarnFree";

const FounderCart=[
    {
        id:1,
        title:"Niamh O'Shea",
        text:"Co-founder and Chief Executive",
        image:"/assets/founder1.jpg",
    },
    {
        id:2,
        title:"Danien Jame",
        text:"Co-founder and Chief Executive",
        image:"/assets/founder2.jpg",
    },
    {
        id:3,
        title:"Orla Dwyer",
        text:"Co-founder, Chairman",
        image:"/assets/founder3.jpg",
    },
    {
        id:4,
        title:"Dara Frazier",
        text:"Co-Founder, Chief Strategy Officer",
        image:"/assets/founder4.jpg",
    },
]

const FactsCart=[
    {
        id:1,
        count:"10 million",
        text:"Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
        id:2,
        count:"100,000",
        text:"Registered users account (as of Sept. 30, 2021)",
    },
    {
        id:3,
        count:"220+",
        text:"Countries and regions have our presence (as of Sept. 30, 2021",
    },
   
]
function About (){
    return(
        <>
        <section className="container my-20">
           <div className="flex justify-between lg:flex-row flex-col items-center">
           <div id="textBox" className="lg:w-[40%] w-full">
            <h3 className="text-5xl font-bold my-4">👋 About Us.</h3>
            <p  className="lg:w-[80%] w-full text-xl">We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</p>
            </div>
            <img src="/assets/hero2.png" alt="Collection" className="lg:w-[60%] w-full lg:mt-0 mt-12" />

           </div>
        </section>
        <section className="container my-20" id="section2">
         
           <div id="textBox" className="lg:w-[40%] w-full">
            <h3 className="text-5xl font-bold my-4">⛱ Founder</h3>
            <p  className="lg:w-[80%] w-full text-xl">We’re impartial and independent, and every day we create distinctive, world-class programmes and content</p>
            </div>

           <article className="flex justify-between lg:flex-row flex-col">
           {FounderCart.map((item) => (
            

            <div className="lg:mt-0 mt-12 bg-icons lg:w-[23%] w-full lg:h-96 md:h-[30rem] rounded-3xl p-5 text-shadowLight">
                <img src={item.image} alt={item.title} className=" w-[93%] rounded-2xl lg:h-[12rem] md:h-[20rem] mx-auto"/>
                <p className="font-bold text-xl  mt-4">{item.title}</p>
                <p className="text-xl">{item.text}</p>
           
              </div>
           
            ))}
           </article>
        </section>

        <section className="container my-20" id="section3">
         
         <div id="textBox" className="lg:w-[40%] w-full">
          <h3 className="text-5xl font-bold my-4">🚀 Fast Facts</h3>
          <p  className="lg:w-[80%] w-full text-xl">We’re impartial and independent, and every day we create distinctive, world-class programmes and content</p>
          </div>

         <article className="flex justify-between lg:flex-row flex-col mt-16">
         {FactsCart.map((item) => (
          

          <div className="lg:mt-0 mt-12 bg-icons lg:w-[31%] w-full lg:h-48 h-[20rem] rounded-3xl p-7 text-shadowLight flex items-center justify-center">
            
            <div>
            <p className="font-bold text-6xl  mb-4">{item.count}</p>
              <p className="lg:text-lg text-xl ">{item.text}</p>
            </div>

         
            </div>
         
          ))}
         </article>
      </section>
        <EarnFree />
        </>
    )
}

export default About;