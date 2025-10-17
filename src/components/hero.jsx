
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
        <div className="text-center dark:text-gray-950 mt-20 md:mt-10 fraunces-900 text-4xl text-white">
            {h1}
        </div>
    )
}
function HeadArrow(){
    return(
        <div className="flex justify-center ">
          
           <svg 
  width="36" 
  height="114" 
  xmlns="http://www.w3.org/2000/svg" 
  className="animate-bounce absolute top-3/5 md:top-1/2 stroke-white dark:stroke-gray-900"
>
  <g strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 3v100M3 95.484l15 15 15-15"/>
  </g>
</svg>
        </div>
    )
}

export default Hero;