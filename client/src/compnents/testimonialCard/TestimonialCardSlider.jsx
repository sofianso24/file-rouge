import React from 'react'
import TestimonialCard from './TestimonialCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./testimonialCard.css"

const TestimonialCardSlider = () => {
    return (
        <div className='testimonial-background '>
            <Carousel
                showArrows={true}
                showThumbs={false}
                emulateTouch={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                transitionTime={500}
                swipeable={true}
                showStatus={false}
                dynamicHeight={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="carousel-button-prev"
                        >
                            {/* <FaArrowLeft /> */}
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="carousel-button-next"
                        >
                            {/* <FaArrowRight /> */}
                        </button>
                    )
                }
                responsive={{
                    // Configure breakpoints for different screen sizes
                    640: {
                        // Two slides per view on screens >= 640px wide
                        slidesToShow: 1,
                    },
                    768: {
                        // Two slides per view on screens >= 768px wide
                        slidesToShow: 1,
                    },
                    1024: {
                        // Three slides per view on screens >= 1024px wide
                        slidesToShow: 1,
                    },
                }}
            >
                <div className="carousel-slide ">
                    <TestimonialCard
                        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
                        name="Eleanor Crisp"
                        field="UX Design"
                        quote="Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!"
                   
                    />
                </div>
                <div className="carousel-slide">
                    <TestimonialCard
                        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
                        name="Gordon Norman"
                        field="Accountant"
                        quote="Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. "
                    
                    />
                </div>
                <div className="carousel-slide">
                    <TestimonialCard
                        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
                        name="Sue Shei"
                        field="Public Relations"
                        quote="The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference."
                    
                    />
                </div>
            </Carousel>
        </div>



    )
}

export default TestimonialCardSlider