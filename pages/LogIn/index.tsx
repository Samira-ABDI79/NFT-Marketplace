
import Head from "next/head";
    const icons=[
        {
            id:1,
            text:"Continue with Facebook",
            icon:"/icons/facebook.svg"
        },
        {
            id:2,
            text:"Continue with twitter",
            icon:"/icons/twitter.svg"
        },
        {
            id:3,
            text:"Continue with Facebook",
            icon:"/icons/facebook.svg"
        }
    ]
    function Login(){
        return(
            <>
              <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="next-head-count" content="2"/>
                <title>Login</title>
                       </Head>
            <section className="container ">
                <main className=" flex justify-center flex-col items-center my-20">
                   <div className="lg:w-[33%] w-full">
                   <h1 className="text-5xl font-bold text-center">Login</h1>
    
                   <div id="iconBox" className="mt-12">
                   {icons.map((item) => (
                <div className="lg:mt-6  z900 w-full  rounded-2xl px-5 py-6 flex mt-12">
                    <img src={item.icon} alt={item.text} className="w-8 h-8"/>
                    <p className="text-xl ml-[10%]">{item.text}</p>
                  </div>
                ))}
                   </div>
                   {/* divider */}
                   <div  className="flex items-center my-12 justify-between">
                       <div className="bg-icons h-[1px] w-[45%]">
    
                       </div>
                       <p>OR</p>
                       <div className="bg-icons h-[1px] w-[45%]">
    
                       </div>
                   </div>
                   <form action="">
                   <div className="flex flex-col">
                       <label htmlFor="email" className="text-xl">Email address</label>
                   <input type="email" placeholder="example@emample.com" 
                   className="border border-shadowDark outline-none bg-shadowLight rounded-2xl px-5 py-2 mt-2"/>
                   </div>
                   <div className="flex flex-col ">
                       <div className="flex justify-between my-6">
                       <label htmlFor="password" className="text-xl">Password</label>
                       <label htmlFor="password" className="text-xl">Forget password</label>
                       </div>
                   <input type="password" 
                   className="border border-shadowDark outline-none bg-shadowLight rounded-2xl px-5 py-2 mt-2"/>
                   </div>
               
            <button className="ButtonQHarr my-12 w-full rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">Continue</button>
            <div className="flex justify-center my-6">
                       <p className="text-xl">New user? </p>
                       <p className="ml-6">Create an account</p>
                       </div>
                    </form>
    
                   </div>
    
                </main>
            </section>
            </>
        )
    }
    
    
    export default Login;