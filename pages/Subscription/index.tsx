import Button from "../../components/Button"

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
       <div className="text-center text-white my-12">
       <h1 className="text-5xl font-bold">Subscription</h1>
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
                     <li key={index} className="my-3">{text}</li>
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