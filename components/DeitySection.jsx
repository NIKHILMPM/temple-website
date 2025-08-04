"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Link from "next/link";

const DeitySection = () => {
    const deityImages = Array.from({ length: 9 }, (_, i) => `/diety/${i + 1}.jpg`);




    return (
        <div className="w-screen h-[90vh] flex justify-center items-center bg-gradient-to-br from-amber-100 to-amber-50 overflow-hidden" style={{ backgroundImage: "url('/diety/background.jpg')" }}>
            <div className="relative w-full h-full flex flex-col items-center justify-center ">
                <div className="absolute inset-0 w-full h-full z-10 backdrop-blur-sm"></div>
                <div className="absolute w-[50%] h-[90%] overflow-hidden z-20">

                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        modules={[EffectCoverflow, Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {deityImages.map((src, index) => (
                            <SwiperSlide key={index} className="h-full w-full overflow-hidden shadow-xl">
                                <img
                                    src={src}
                                    alt={`Deity ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="w-full min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col items-center justify-center px-6 py-12 text-gray-800 font-serif text-lg sm:text-xl">
                <div className="max-w-4xl text-center space-y-8">
                    <p className="leading-relaxed">
                        The 16th century Goa saw the reign of the Portuguese and faced their terror, intending to spread Christianity.
                        Goans witnessed forceful acts of conversion, temple demolitions, destruction of idols, looting of temple wealth,
                        and even setting temple buildings on fire.
                        During this dark period, our pious ancestors risked their lives—leaving behind their homes, land, wealth, and
                        loved ones. Under the cover of moonless nights, they crossed borders with their family deities and symbols,
                        traversing forests, rivers, and hills to rebuild temples in new lands and preserve the Hindu faith for future
                        generations.
                    </p>
                    <div>
                        <Link
                            href="/about"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-2xl shadow-md hover:from-rose-600 hover:to-pink-600 transition duration-300"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeitySection;
