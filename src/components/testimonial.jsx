const testimonalData = [
  {
    id: 1,
    name: "Emily R.",
    position: "Marketing Director",
    image: "image-emily.jpg",
    testimonial: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  { id: 2,
    name: "Thomas S.",
    position: "Chief Operating Officer",
    image: "image-thomas.jpg",
    testimonial: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
  },
    { id: 3,
    name: "Jennie F.",
    position: "Business Owner",
    image: "image-jennie.jpg",
    testimonial: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
]

function Testimonials(){
    const testimony= "Client testimonials"
return(
    <div className="dark:bg-gray-950">
     <h2 className="mb-15 mt-20 text-center text-grey-60  fraunces-900 text-[25px] dark:text-white">{testimony.toUpperCase()}</h2>
        <div className="flex md:flex-row lg:flex-row flex-col justify-center items-center gap-y-10 lg:gap-x-20 md:gap-x-10 mb-20 ">
        {
        testimonalData.map((data)=>(
            <TestimonialCard 
            key={data.id} name={data.name} position ={data.position} image={data.image} testimonial={data.testimonial}/>
        ))
        }
        </div>
     
    </div>
)
}
function TestimonialCard({name, position, image, testimonial}){
    return(
        <div className="flex justify-center items-center flex-col gap-y-4 mx-10 ">
            <div><img src={`/images/${image}`} alt={name}  className="rounded-full size-20"/></div>
            <p className="text-center text-grey-60 barlow-semibold dark:text-white">{testimonial}</p>
            <div className="text-center">
            <h3 className="text-grey-950 fraunces-900 text-[20px] dark:text-white">{name}</h3>
            <h4 className="text-grey-40 barlow-semibold dark:text-white">{position}</h4>
            </div>
        </div>
    )
}

export default Testimonials