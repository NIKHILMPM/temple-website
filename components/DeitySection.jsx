'use client';

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const deityArray = [
    {
        marathi: "वासुदेव पुरुष",
        english: "Vasudev Purush",
        img: "/diety/1.jpg",
        description: "Associated with Lord Krishna or Vishnu, Vasudev Purush symbolizes divine protection and cosmic order."
    },
    {
        marathi: "राम पुरुष",
        english: "Ram Purush",
        img: "/diety/2.jpg",
        description: "Representative of Lord Ram, the ideal king and upholder of dharma. Ram Purush signifies strength and virtue."
    },
    {
        marathi: "ग्राम पुरुष",
        english: "Gram Purush",
        img: "/diety/3.jpg",
        description: "The guardian deity of the village, responsible for its protection, prosperity, and peace."
    },
    {
        marathi: "गोविंद पुरुष",
        english: "Govind Purush",
        img: "/diety/4.jpg",
        description: "An epithet of Krishna, Govind Purush embodies compassion, joy, and the nurturing aspect of the Divine."
    },
    {
        marathi: "विट्टल पुरुष",
        english: "Vittal Purush",
        img: "/diety/5.jpg",
        description: "A form of Krishna or Vishnu, commonly worshipped in Maharashtra. Vittal Purush stands for devotion and humility."
    },
    {
        marathi: "अनंत विठ्ठल पुरुष",
        english: "Anant Vithal Purush",
        img: "/diety/6.jpg",
        description: "An eternal form of Vithoba symbolizing infinite divinity and timeless spiritual presence."
    },
    {
        marathi: "पद्मनाभ पुरुष",
        english: "Padmanabha Purush",
        img: "/diety/7.jpg",
        description: "Refers to the lotus-navel Vishnu form. Padmanabha Purush is the creator and sustainer of all worlds."
    },
    {
        marathi: "दंड पाणी",
        english: "Danda Pani",
        img: "/diety/8.jpg",
        description: "A fierce form holding a staff (danda), Danda Pani signifies protection, law, and righteous punishment."
    },
    {
        marathi: "आदिसिंह पुरुष",
        english: "Adhisimha Purush",
        img: "/diety/9.jpg",
        description: "Possibly a local form with lion symbolism, Adhisimha Purush reflects strength, courage, and divine leadership."
    }
];


export default function DeitySection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const currentDeity = deityArray[activeIndex];

    return (
        <>
            {/* .........................................pc-ui */}
            <div className="hidden md:block relative h-full w-full">
                <div
                    className="w-full h-full bg-cover bg-center relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${currentDeity.img})`,
                        transition: "background-image 1s ease-in-out",
                    }}
                >
                    <div className="absolute w-full h-full inset-0 bg-black/40 backdrop-blur-xl z-0 flex">
                        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6 bg-black/10">
                            <div className="h-[95%] w-[95%] text-white text-center space-y-6 transition-opacity duration-1000 ease-in-out opacity-100 bg-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-inner shadow-amber-100/20">

                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-amber-200 transition-opacity duration-1000">
                                    {currentDeity.marathi}
                                </h2>

                                <p className="text-xl md:text-2xl font-semibold text-amber-100">
                                    {currentDeity.english}
                                </p>

                                <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto">
                                    {currentDeity.description}
                                </p>

                            </div>
                        </div>


                        <div className="w-1/2 h-full flex items-center justify-center">
                            <div className="w-[60%] h-[90%] flex items-center justify-center">
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    speed={2000}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                    className="w-full h-full"
                                >
                                    {deityArray.map((deity, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="h-full w-full bg-white rounded-lg overflow-hidden shadow">
                                                <img
                                                    src={deity.img}
                                                    alt={deity.english}
                                                    className="w-full h-full object-cover object-center"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
            {/* ...........................................mobile-ui */}
            <div className="block md:hidden relative h-full w-full">
                <div
                    className="w-full h-full bg-cover bg-center relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${currentDeity.img})`,
                        transition: "background-image 1s ease-in-out",
                    }}
                >
                    <div className="absolute w-full h-full inset-0 bg-black/40 backdrop-blur-xl z-0 flex flex-col justify-center items-center">
                        <div className="w-[80%] h-full flex items-center justify-center">
                            <div className="w-full h-[90%] flex items-center justify-center">
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    speed={2000}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                    className="w-full h-full"
                                >
                                    {deityArray.map((deity, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="h-full w-full bg-white rounded-lg overflow-hidden shadow">
                                                <img
                                                    src={deity.img}
                                                    alt={deity.english}
                                                    className="w-full h-full object-cover object-center"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6 bg-black/10">
                            <div className="h-[95%] w-[95%] text-white text-center space-y-6 transition-opacity duration-1000 ease-in-out opacity-100 bg-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-inner shadow-amber-100/20">

                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-amber-200 transition-opacity duration-1000">
                                    {currentDeity.marathi}
                                </h2>

                                <p className="text-xl md:text-2xl font-semibold text-amber-100">
                                    {currentDeity.english}
                                </p>

                                <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto">
                                    {currentDeity.description}
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}
