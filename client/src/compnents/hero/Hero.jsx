
import "../../compnents/hero/hero.css"

import Search from "../search/Search"
import heroImage from "../../assets/heroImage.png"

const Hero = () => {

    return (
        <div className='relative '>
            <div className='relative'>
                
                <section>
                    <div className="  px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex bg-[#f9fff5] z-0">
                        <div className='flex-none space-y-5 max-w-xl relative'>
            <div className='absolute inset-0 -top-20 right-10 blur-xl h-[580px] z-1 w-full bg-[#AAD4C1]/30 rounded-full'  ></div>
                            
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                            The <span className='text-[#007749]'> Smart</span> <br/> Choice For <span className='text-[#007749]'>Future</span> 
                            </h1>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                            </p>
                            <Search/>
                           
                        </div>
                        <div className='flex-1 hidden md:block'>
                            {/* Replace with your image */}
                            <img src={heroImage} className="max-w-xl" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero