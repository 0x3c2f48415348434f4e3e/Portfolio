async function init(){
    const userAgent = context.req.headers['user-agent'];
    return userAgent
}

export default function Terminal(){
    //create our terminal here
    /*const userAgent = context.req.headers['user-agent'];
    console.log("Testing")
    //console.log(init);
    console.log(userAgent)
    */
    return(
        <div className="bg-black text-green-500 min-w-full min-h-full">
            <h1>Loading</h1>     
        </div>
    )
}