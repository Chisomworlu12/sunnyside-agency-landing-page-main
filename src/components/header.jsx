import { useState } from "react";


function Header (){
const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    return(
        <div>
        <div className="flex justify-between items-center duration-500">
            <Logo />
            <NavbarDesktop/>
            <MenuIcon onToggleMenu ={toggleMenu}  />
            </div>
            <NavbarMobile isOpen={isOpen}/>
           </div>
    )
}

function Logo (){
return(
     <div><img src="/images/logo.svg" alt="logo" className="duration-500" /></div>
)
}

function NavbarDesktop (){
    return(
             <ul className="lg:flex gap-x-10 barlow-semibold duration-500 hidden">
                    <Button className="text-white"> About</Button>
                    <Button className="text-white">Services</Button>
                    <Button className="text-white">Projects</Button>
                    <Button className="text-black fraunces-700  bg-white px-5 py-2 rounded-full ">Contact</Button>
                </ul>
            
       
    )
   
}

function MenuIcon({onToggleMenu }){
    
    return(
        <div className="lg:hidden" onClick={onToggleMenu}>
            <img src="/images/icon-hamburger.svg" alt="hamburger" className="duration-500" />
        </div>
    )
}

function NavbarMobile({isOpen}) {
    

    return(
        <>
      <ul className={"lg:hidden flex flex-col gap-y-10  center items-center py-10 bg-white w-[85%] absolute z-20 top-30 inset-x-0 mx-auto   barlow-semibold transition-transform duration-500 " + (!isOpen &&' hidden') }>
        
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute -right-8.5 -top-11  overflow-hidden text-white" width="90" height="90" viewBox="0 0 16 16"><path fill="currentColor" d="M9.573 4.427L6.177 7.823a.25.25 0 0 0 0 .354l3.396 3.396a.25.25 0 0 0 .427-.177V4.604a.25.25 0 0 0-.427-.177"/></svg>
     
           
           <Button className="text-grey-55">About</Button>
           <Button className="text-grey-55">Services</Button>
           <Button className="text-grey-55">Projects</Button>
           <div><Button className="text-black bg-yellow-5 fraunces-700 px-4 py-2 rounded-full ">CONTACT</Button></div>
        </ul>
        </>
    )
    
}

function Button ({children, className}){
    return(
        <button className={className}>{children}</button>
    )}


export default Header;