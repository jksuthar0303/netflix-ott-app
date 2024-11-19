import { Card, Image, Modal, ModalContent,  ModalBody, useDisclosure,Button } from "@nextui-org/react";
import movies from "../../../db/Movies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Logo } from "../../Logo";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faPlay,faPlus } from '@fortawesome/free-solid-svg-icons';

export default function MoviesCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: '0',
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
          centerPadding: '0',
          speed: 2000,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
          centerPadding: '0',
          speed: 2000,
          centerMode: true,
        },
      },
    ],
  };
  const handleWatchMovie = () => {
    if (selectedMovie?.trailer_url) {
      window.open(selectedMovie?.trailer_url, '_blank');  
    }
  };
  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    onOpen();
  };

  return (
    <div className="w-full sm:w-[90%] lg:w-[100%] xl:w-[1400px] mx-auto">
      <div className="trending now">
        <h1 className="text-2xl font-bold mb-4">Trending Now</h1>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="px-2 mb-28">
              <Card
                isPressable
                onPress={() => handleCardClick(movie)}
                isFooterBlurred
                radius="lg"
                className="border-none bg-black"
              >
                <Image
                  isZoomed
                  alt={movie.title}
                  className="object-cover"
                  height={250}
                  src={movie.poster}
                  width={180}
                />
              </Card>
            </div>
          ))}
        </Slider>
      </div>

      <div className="only on netflix">
        <h1 className="text-2xl font-bold mb-4">Only On Netflix</h1>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="px-2">
              <Card
                isPressable
                onPress={() => handleCardClick(movie)}
                isFooterBlurred
                radius="lg"
                className="border-none bg-black"
              >
                <Image
                  isZoomed
                  alt={movie.title}
                  className="object-cover"
                  height={250}
                  src={movie.poster}
                  width={180}
                />
              </Card>
            </div>
          ))}
        </Slider>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" className="h-[600px]">
        <ModalContent>
          {(onClose) => (
            <>

              <ModalBody
                style={{
                  backgroundImage: selectedMovie ? `url(${selectedMovie.modalBg})` : '',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="relative flex flex-col justify-end"
              >
                <button onClick={onClose} className="absolute top-0 right-3 mt-2 mr-2 text-white font-bold text-lg">
                  X
                </button>
                <div className="flex flex-col items-start pb-4">
                  <Logo />
                  <h2 className="text-white text-3xl font-bold mb-4">{selectedMovie?.title}</h2>
                  <p className="text-red-700 flex space-x-4 mb-2 font-bold">
                    {selectedMovie?.genre?.map((genre, index) => (
                      <span key={index}>{genre}</span>
                    ))}
                  </p>
                  <div className="text-white mb-8">
                    <span>
                      <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-500" />
                      {selectedMovie?.rating}
                    </span>
                    <span className="ml-4">{selectedMovie?.release_date}</span>
                  </div>
                  <div className='flex mb-10'>
                        <Button
                        onPress={handleWatchMovie}
                            radius="full"
                            className="w-36 bg-[#e00000] text-white hover:bg-[#e00000] focus:outline-none flex items-center justify-center space-x-2"
                        >
                            <FontAwesomeIcon icon={faPlay} className="text-white" />
                            <span>Watch Movie</span>
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
