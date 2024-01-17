export default function AboutMe(){
    return(
        <div className="text-white relative transform -translate-x-1/2 -translate-y-20 top-96 left-1/2 bg-black">
            <h1 className="pb-5 text-center">Tech Stack</h1>
            <div className="flex justify-center">
                    <div>
                    <img src="/asset/html.png" alt="html" width="64" className="p-5 lg:w-32"/>
                    </div>
                    <div>
                    <img src="/asset/css-3.png" alt="css" width="64" className="p-5 lg:w-32"/>
                    </div>
                    <div>
                    <img src="/asset/js.png" alt="js" width="64" className="p-5 lg:w-32"/>
                    </div>
                    <div>
                    <img src="/asset/react.png" alt="js" width="64" className="p-5 lg:w-32"/>
                    </div>
                    <div>
                    <img src="/asset/python.png" alt="js" width="64" className="p-5 lg:w-32"/>
                    </div>
                    <div>
                    <img src="/asset/c-.png" alt="js" width="64" className="p-5 lg:w-32"/>
                    </div>
            </div>
        </div>
    )
}