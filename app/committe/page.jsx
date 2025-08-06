"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const committeeList = [
    {
        title: "COMMITTEE FOR TRIENNIUM (FROM 01/04/2025 - 31/03/2028)",
        items: [
            {
                name: "SHRI. YOGESH S. S. SHIRDONKAR",
                phone: "7350541305",
                designation: "PRESIDENT",
            },
            {
                name: "SHRI. SHISHIR D. S. KADKADE",
                phone: "9822488454",
                designation: "SECRETARY",
            },
            {
                name: "SHRI. GURUDATTA / PRASHANT A. NAIK",
                phone: "8788080495",
                designation: "TREASURER",
            },
            {
                name: "SHRI. KRISHNAPRASAD SHANKHWALKAR",
                phone: "9822388433",
                designation: "ATTORNEY",
            },
            {
                name: "SHRI. NARAYAN V. KAMAT",
                phone: "9823058208",
                designation: "SUB PRESIDENT",
            },
            {
                name: "SHRI. UPENDRA P. KAMAT",
                phone: "9130748383",
                designation: "SUB SECRETARY",
            },
            {
                name: "SHRI. AKSHAY A. S. KADKADE",
                phone: "9823222414",
                designation: "SUB TREASURER",
            },
        ],
    },
    {
        title: "PUJARI",
        items: [
            {
                name: "SHRI. RAJESH R. DEVIMANEKAR",
                phone: "9423312349",
                designation: "MAIN PUJARI",
            },
            {
                name: "SHRI. PRASAD BHAT",
                phone: "8010682420",
                designation: "ASST. PUJARI",
            },
        ],
    },
    {
        title: "OFFICE STAFF",
        items: [
            {
                name: "SHRI. MILIND G. SINGBAL",
                phone: "9923161662",
                designation: "MANAGER",
            },
        ],
    },
];



const page = () => {
    return (
        <>
            {/* for pc */}
            <div className="hidden md:block ">
                <div
                    className="w-screen h-screen flex justify-center items-end bg-center bg-cover"
                    style={{ backgroundImage: "url('/background/background.jpg')" }}
                >
                    <div className="h-[90%] w-[70%] flex justify-around items-center bg-opacity-90 rounded-xl overflow-hidden shadow-lg">
                        <div className="h-[85%] w-full mb-10">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={70}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                loop={true}
                                className="h-full w-full flex justify-center"
                            >
                                {committeeList.map((committegroup, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="h-full w-full backdrop-blur-2xl font-bold font-serif rounded-lg p-6 overflow-y-auto flex flex-col justify center items-center">
                                            <div className="h-[20%] w-full flex justify-center items-center">
                                                <h2 className="text-3xl font-bold mb-4 text-center">{committegroup.title}</h2>
                                            </div>
                                            <div className="h-[60%] w-full flex justify-start items-start overflow-y-auto">
                                                <table className="w-full text-sm md:text-base table-fixed border-collapse">
                                                    <thead>
                                                        <tr className="h-12 ">
                                                            <th className="px-2 py-1 text-center">Name</th>
                                                            <th className="px-2 py-1 text-center">Phone No.</th>
                                                            <th className="px-2 py-1 text-center">Designation</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {committegroup.items.map((item) => (
                                                            <tr key={item.sr} className="h-12">
                                                                <td className="px-2 py-1 text-center align-middle h-12">{item.name}</td>
                                                                <td className="px-2 py-1 text-center align-middle h-12 truncate">{item.phone}</td>
                                                                <td className="px-2 py-1 text-center align-middle h-12">{item.designation}</td>
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
                    style={{ backgroundImage: "url('/background/background.jpg')" }}
                >
                    <div className="h-[90%] w-[70%] flex justify-around items-center bg-opacity-90 rounded-xl overflow-hidden shadow-lg">
                        <div className="h-[85%] w-full mb-10">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={70}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                loop={true}
                                className="h-full w-full flex justify-center"
                            >
                                {committeeList.map((committegroup, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="h-full w-full backdrop-blur-2xl font-bold font-serif rounded-lg p-6 overflow-y-auto flex flex-col justify center items-center">
                                            <div className="h-[20%] w-full flex justify-center items-center">
                                                <h2 className="text-xl mb-4 text-center">{committegroup.title}</h2>
                                            </div>
                                            <div className="h-[60%] w-full flex justify-start items-start overflow-y-auto">
                                                <table className="w-full text-[20%] table-fixed border-collapse">
                                                    <thead>
                                                        <tr className="h-12 ">
                                                            <th className="px-2 py-1 text-center">Name</th>
                                                            <th className="px-2 py-1 text-center">Phone No.</th>
                                                            <th className="px-2 py-1 text-center">Designation</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {committegroup.items.map((item) => (
                                                            <tr key={item.sr} className="h-12">
                                                                <td className="px-2 py-1 text-center align-middle h-12">{item.name}</td>
                                                                <td className="px-2 py-1 text-center align-middle h-12 truncate">{item.phone}</td>
                                                                <td className="px-2 py-1 text-center align-middle h-12">{item.designation}</td>
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
