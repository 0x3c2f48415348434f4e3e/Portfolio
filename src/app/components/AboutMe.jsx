export default function AboutMe(){
    return(
        <div className="text-white relative transform -translate-x-1/2 -translate-y-20 top-96 left-1/2 bg-black">
            <section className="w-55 flex">

            <img src="asset/programmer1.jpg" alt="programmer" width="480" className="inline-block"/>
            <div className="pl-5">
                <h1 className="inline-block">About Me</h1>
                <p className="w-65">I am a computer Science student based in the UK. I passion for anything involving tech and research.
                    Currently, focusing on BackEnd development, cybersecurity, hardware knowledge and computer vision.
                </p>
            </div>
            </section>
        </div>
    )
}