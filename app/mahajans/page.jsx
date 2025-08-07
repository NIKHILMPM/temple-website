"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow } from 'swiper/modules';

const gotraData = [
    {
        title: "GOTRA VACH",
        items: [
            { name: "Prabhu Dessai" },
            { name: "Shenvi (Kadkade)" },
            { name: "Padiyar" },
            { name: "Naik" },
            { name: "Jhamb" },
            { name: "Kamat Shankhwalkar" },
        ],
    },
    {
        title: "GOTRA KASHYAP",
        items: [],
    },
    {
        title: "GOTRA BHARADWAJ",
        items: [
            { name: "Prabhu (Alvenkar)" },
            { name: "Shenvi (Shirdonkar)" },
            { name: "Puranik" },
        ],
    },
    {
        title: "GOTRA KOUSH",
        items: [{ name: "Kamat Shankhwalkar" }],
    },
    {
        title: "GOTRA AARTI",
        items: [],
    },
    {
        title: "GOTRA KAUNDINYA",
        items: [{ name: "Padiyar" }],
    },
    {
        title: "GOTRA VASHISHTA",
        items: [
            { name: "Pingle" },
            { name: "Gutsa" },
            { name: "Naik" },
            { name: "Shenvi" },
            { name: "Padiyar" },
        ],
    },
];

// block md: hidden


const page = () => {
    return (
        <>
            <div className="absolute inset-0 w-full h-full backdrop-blur-lg" />

            {/* for pc */}
            <div className="hidden md:block ">
                <div
                    className="w-screen h-screen flex justify-center items-end bg-center bg-cover"
                    style={{ backgroundImage: "url('/background/pujaribg.jpg')" }}
                >
                    <div className="h-[90%] w-[70%] flex justify-around items-center bg-opacity-90 rounded-xl overflow-hidden shadow-lg">
                        <div className="h-[85%] w-full mb-10">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                                spaceBetween={70}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                loop={true}
                                className="h-full w-full flex justify-center"
                            >
                                {gotraData.map((committegroup, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="h-full w-full bg-black/20 text-white font-bold font-serif rounded-lg p-6 overflow-y-auto flex flex-col justify center items-center">

                                            <div className="h-[20%] w-full flex justify-center items-center">
                                                <h2 className="text-3xl font-bold mb-4 text-center">{committegroup.title}</h2>
                                            </div>
                                            <div className="h-[60%] w-full flex justify-start items-start overflow-y-auto">
                                                <table className="w-full text-sm md:text-base table-fixed border-collapse">

                                                    <tbody>
                                                        {committegroup.items.map((item) => (
                                                            <tr key={item.name} className="h-12">
                                                                <td className="px-2 py-1 text-center align-middle h-12">{item.name}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>


                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div >
                    </div >
                </div >
            </div>
            {/* for phone */}
            <div className="block md:hidden ">
                <div
                    className="w-screen h-screen flex justify-center items-end bg-center bg-cover"
                    style={{ backgroundImage: "url('/background/pujaribg.jpg')" }}
                >
                    <div className="h-[90%] w-[70%] flex justify-around items-center bg-opacity-90 rounded-xl overflow-hidden shadow-lg ">
                        <div className="h-[85%] w-full mb-10 ">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                                spaceBetween={70}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                loop={true}
                                className="h-full w-full flex justify-center"
                            >
                                {gotraData.map((committegroup, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="h-full w-full bg-black/20 text-white font-bold font-serif rounded-lg p-6 overflow-y-auto flex flex-col justify center items-center">
                                            <div className="h-[20%] w-full flex justify-center items-center">
                                                <h2 className="text-3xl font-bold mb-4 text-center">{committegroup.title}</h2>
                                            </div>
                                            <div className="h-[60%] w-full flex justify-start items-start overflow-y-auto">
                                                <table className="w-full text-[80%] table-fixed border-collapse">

                                                    <tbody>
                                                        {committegroup.items.map((item) => (
                                                            <tr key={item.name} className="h-12">
                                                                <td className="px-2 py-1 text-center align-middle h-12 ">{item.name}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>


                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div >
                    </div >
                </div >
            </div>
        </>
    );
};

export default page;
