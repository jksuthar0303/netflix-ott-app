import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@nextui-org/react";


const Carousel = ({ slides, autoSlideInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };



    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [currentIndex, autoSlideInterval]);

    return (
        <div className='h-full sm:h-[500px] lg:h-[700px]'>
            <div className="h-[780px] w-full m-auto px-10 relative group">
                <div className="relative w-full h-[50%] sm:h-[50%] lg:h-[70%] rounded-xl bg-center bg-cover duration-500"
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>

                    <div className="absolute inline px-4 py-2 ">
                        <h1 className=' text-white text-4xl sm:text-5xl md:text-6xl font-bold shadow-lg mb-2 mt-44 sm:mt-44 lg:mt-72'>{slides[currentIndex].title}</h1>
                        <span className='text-gray-400 text-sm whitespace-pre-line'>{slides[currentIndex].dis}</span>
                        <div className='flex mt-2'>
                            <Button
                                radius="full"
                                className="w-32 bg-[#e00000] text-white hover:bg-[#e00000] focus:outline-none flex items-center justify-center space-x-2"
                            >
                                <FontAwesomeIcon icon={faPlay} className="text-white" />
                                <span>Trailer</span>
                            </Button>
                            <Button
                                radius="full"
                                className="w-32 bg-[#4d4c4c74] ml-2 text-white hover:bg-[#4d4c4c74] focus:outline-none"
                            >
                                <FontAwesomeIcon icon={faPlus} className="text-white" />
                                <span>Watch List</span>
                            </Button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Carousel;
