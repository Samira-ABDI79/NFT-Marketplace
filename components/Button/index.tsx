interface input{
    type:string;
    title:string;
}

function Button(props:input){
    return(
        <>
        
        {props.type=="yellow"?
        <button className="ButtonQHarr rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">{props.title}</button>
        : <></>}
        </>
    )
}

export default Button