
function Hero(){
    return(
        <div>
            <HeadText/>
            <HeadArrow/>
        </div>
    )
}
function HeadText() {
    const h1 = "We are creatives".toUpperCase()
    return(
        <div className="text-center mt-20 md:mt-10 fraunces-900 text-4xl text-white">
            {h1}
        </div>
    )
}
function HeadArrow(){
    return(
        <div className="flex justify-center ">
            <img src="/images/icon-arrow-down.svg" alt="" className=" animate-bounce absolute top-3/5 md:top-1/2"/>
        </div>
    )
}

export default Hero;