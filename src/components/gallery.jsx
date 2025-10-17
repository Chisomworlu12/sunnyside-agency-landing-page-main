const gallery = [
  {
    id: 1,
    image: "image-gallery-milkbottles.jpg",
    alt: "Milk Bottles",
  }, 
  {
    id: 2,
    image: "image-gallery-orange.jpg",
    alt: "Orange",
  },
  { id: 3,      
    image: "image-gallery-cone.jpg",
    alt: "Cone",
  },
  { id: 4,
    image: "image-gallery-sugar-cubes.jpg",
    alt: "Sugar Cubes",
  },
]   

function Gallery() {
return <div>
    <GalleryCard/>
</div>
}

function GalleryCard(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 ">
            {gallery.map(pic=> <MobileGallery img={pic.image} key={pic.id} alt={pic.alt}/>
         )}
         
            {gallery.map(pic=> <DesktopGallery img={pic.image} key={pic.id} alt={pic.alt}/>
         )}

        </div>
    )
}

function MobileGallery({img, alt}){
return <img src={`/images/mobile/${img}`} alt={alt} className="md:hidden"/>
}

function DesktopGallery({img, alt}){
return <img src={`/images/desktop/${img}`} alt={alt} className="hidden md:block"/>
}
export default Gallery