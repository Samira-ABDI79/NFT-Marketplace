import Button from "../components/ButtonSamira"
import Head from "next/head";
const SubscriptionList=[
    {
        id:1,
        title:"STARTER",
        price:"$5%/mo",
        property:[
            {
                text:"Automated Reporting"
            },
            {
                text:"Faster Processing"
            },
            {
                text:"Customizations"
            },
        ]
    },
    {
        id:2,
        title:"BASIC",
        price:"$15%/mo",
        property:[
            {
                text:"Everything in Starter"
            },
            {
                text:"100 Buils"
            },
            {
                text:"Progress Reports"
            },
            {
                text:"Premium Suppor"
            },
        ]
    },
    {
        id:3,
        title:"PLUS",
        price:"$25%/mo",
        property:[
            {
                text:"Everything in Basic"
            },
            {
                text:"Unlimited Builds"
            },
            {
                text:"Advanced Analytics"
            },
            {
                text:"Company Evaluations"
            },
        ]
    },
]
function Subscription(){
    return(
        <>
          <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="next-head-count" content="2"/>
                <title> Subscription</title>
                       </Head>
       <div className="text-center text-white my-12">
       <h1 className="text-5xl font-bold">💎 Subscription</h1>
        <p className="text-xl my-6">Pricing to fit the needs of any companie size.</p>
       </div>
       <div className="container text-white mt-20 mb-32">
       <ul className=" py-4 px-2 text-lg   flex justify-between lg:flex-row flex-col bg-shadowLight" >
            {SubscriptionList.map(({title,price,property,}, index) => (
             <div className="border p-6 border-icons rounded-xl lg:w-[30%] w-full lg:h-[30rem] h-auto lg:mt-0 mt-12" key={index}>
                 <div className="flex justify-between">
                     <h1 className=" font-bold text-2xl">{title}</h1>
                     <button className="bg-icons text-shadowDark rounded-xl px-6 py-3">POPULAR</button>
                 </div>
                 <p className="text-5xl font-bold my-12">{price}</p>
                 <ul className="my-5">
                 {property.map(({text}, index) => ( 
                    <li key={index} className="my-3 flex">
                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>

                         <p className="ml-2" >
                         {text}</p>
                    </li>
                  ))}
                 </ul>
                 <Button type="yellow" title="Submit" />

             </div>
            ))}
          </ul>
       </div>
        </>
    )
}

export default Subscription;