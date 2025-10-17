
function Services() {
 return(   <>
    <MboileServices/>
    <DesktopServices/>
    </>)
}
function MboileServices() {
   return( <div className="grid md:hidden">
        <MobilePicService src="/images/mobile/image-transform.jpg"/>
        
        <MobileTextService title={ "Transform your brand"} desc={" We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."} link={"LEARN MORE"} linkClass={" fraunces-900 hover:underline"}/>
        <MobilePicService src="/images/mobile/image-stand-out.jpg"/>
        <MobileTextService title={ "Stand out to the right audience"} desc={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."} link={"LEARN MORE"} linkClass={" fraunces-900 hover:underline"}/>
        <MobileItemText title={"Graphic Design"} desc={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."} src= {"/images/mobile/image-graphic-design.jpg"} className= "text-green "/>
        <MobileItemText title={"Photography"} desc={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."} src= {"/images/mobile/image-photography.jpg"} className= "text-blue"/>
    </div>)
}


function DesktopServices() {
   return( <div className="md:grid md:grid-cols-2 hidden ">
        
        <MobileTextService title={ "Transform your brand"} desc={" We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."} link={"LEARN MORE"} linkClass={" fraunces-900 hover:underline"}/>
        <MobilePicService src="/images/desktop/image-transform.jpg"/>
        <MobilePicService src="/images/desktop/image-stand-out.jpg"/>
        <MobileTextService title={ "Stand out to the right audience"} desc={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."} link={"LEARN MORE"} linkClass={" fraunces-900 hover:underline"}/>
        <MobileItemText title={"Graphic Design"} desc={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."} src= {"/images/desktop/image-graphic-design.jpg"} className= "text-green "/>
        <MobileItemText title={"Photography"} desc={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."} src= {"/images/desktop/image-photography.jpg"} className= "text-blue"/>
    </div>)
}


function MobilePicService({src,alt}) {
return(
   <img src={src} alt={alt} />
)
}
function DesktopPicService({src,alt}) {
return(
   <img src={src} alt={alt}  />
)
}
function MobileTextService({title,desc,link, linkClass}) {
    return(
        <div className="text-center p-12 space-y-6 md:space-y-2 lg:space-y-10 ">
            <h1 className="text-grey-950 text-3xl fraunces-900 dark:text-white">{title}</h1>
            <p className="text-grey-55 dark:text-white">{desc}</p>
            <a className={linkClass}>{link}</a>
            </div>
    )
}
function MobileItemText({title,desc,src,className}) {
    return(
        <div className=" relative">

            <img src={src} className=""/>
            <div className="absolute top-3/5 md:top-4/8 text-center p-6 md:p-4 space-y-4  ">
            <h1 className={`text-[40px] fraunces-900 + ${className}`}>{title}</h1>
            <p className={`barlow-semibold ${className}`}>{desc}</p>
           </div> 
            </div> 
    )
}
export default Services;