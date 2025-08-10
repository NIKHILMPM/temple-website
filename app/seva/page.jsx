"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sevasList = [
    {
        title: "SEVA LIST 1",
        total: 150.0,
        items: [
            { sr: 1, seva: "ABHISHEK NAIVEDYA", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 2, seva: "KUMKUMARCHAN", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 3, seva: "PURUSHAS ABHISHEK", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 4, seva: "PAVMAN AVARTAN", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 5, seva: "EKADASHNI", nos: 1, rate: 30.0, amount: 30.0 },
        ],
    },
    {
        title: "SEVA LIST 2",
        total: 300.0,
        items: [
            { sr: 1, seva: "ABHISHEK NAIVEDYA", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 2, seva: "KUMKUMARCHAN", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 3, seva: "PURUSHAS ABHISHEK", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 4, seva: "PAVMAN AVARTAN", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 5, seva: "EKADASHNI", nos: 1, rate: 30.0, amount: 30.0 },
            {
                sr: 6,
                seva: "BRAHMAN, SUHASINI, KUMARIKA",
                nos: 1,
                rate: 50.0,
                amount: 50.0,
            },
            {
                sr: 7,
                seva: "NANDADEEP 8 DAYS (1 LIT. OIL)",
                nos: 1,
                rate: 100.0,
                amount: 100.0,
            },
        ],
    },
    {
        title: "SEVA LIST 3",
        total: 350.0,
        items: [
            { sr: 1, seva: "ABHISHEK NAIVEDYA", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 2, seva: "KUMKUMARCHAN", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 3, seva: "PAVMAN AVARTAN", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 4, seva: "EKADASHNI", nos: 1, rate: 30.0, amount: 30.0 },
            {
                sr: 5,
                seva: "BRAHMAN, SUHASINI, KUMARIKA",
                nos: 1,
                rate: 50.0,
                amount: 50.0,
            },
            {
                sr: 6,
                seva: "NANDADEEP 8 DAYS (1 LIT. OIL)",
                nos: 1,
                rate: 100.0,
                amount: 100.0,
            },
            { sr: 7, seva: "KANUK", nos: 1, rate: 80.0, amount: 80.0 },
        ],
    },
    {
        title: "SEVA LIST 4",
        total: 750.0,
        items: [
            { sr: 1, seva: "ABHISHEK NAIVEDYA", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 2, seva: "KUMKUMARCHAN", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 3, seva: "PURUSHAS ABHISHEK", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 4, seva: "PAVMAN AVARTAN", nos: 1, rate: 30.0, amount: 30.0 },
            {
                sr: 5,
                seva: "BRAHMAN, SUHASINI, KUMARIKA",
                nos: 2,
                rate: 30.0,
                amount: 60.0,
            },
            {
                sr: 6,
                seva: "NANDADEEP 8 DAYS (2 LIT. OIL)",
                nos: 2,
                rate: 100.0,
                amount: 200.0,
            },
            {
                sr: 7,
                seva: "DANDPANIS KHICHADI",
                nos: 1,
                rate: 100.0,
                amount: 100.0,
            },
            {
                sr: 8,
                seva: "GRAMPURUSHAS PAYAS",
                nos: 1,
                rate: 100.0,
                amount: 100.0,
            },
            {
                sr: 9,
                seva: "SADHA CHANDIPATH",
                nos: 1,
                rate: 150.0,
                amount: 150.0,
            },
            {
                sr: 10,
                seva: "KANUK",
                nos: 1,
                rate: 20.0,
                amount: 20.0
            },
        ],
    },
    {
        title: "SEVA LIST 5",
        total: 350.0,
        items: [
            { sr: 1, seva: "ABHISHEK NAIVEDYA", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 2, seva: "KUMKUMARCHAN", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 3, seva: "PURUSHAS ABHISHEK", nos: 1, rate: 30.0, amount: 30.0 },
            { sr: 4, seva: "PAVMAN AVARTAN", nos: 1, rate: 30.0, amount: 30.0 },
            {
                sr: 5,
                seva: "NANDADEEP 8 DAYS (2 LIT. OIL)",
                nos: 1,
                rate: 100.0,
                amount: 100.0,
            },
            {
                sr: 6,
                seva: "GATHAWAL (VARBHET)",
                nos: 1,
                rate: 130.0,
                amount: 130.0,
            },
        ],
    },
    {
        title: "MONTHLY PANCHAMI SEVA",
        total: 840.0,
        items: [
            { sr: 1, seva: "ABHISHEK NAIVEDYA", nos: 12, rate: 30.0, amount: 360.0 },
            { sr: 2, seva: "KUMKUMARCHAN", nos: 12, rate: 30.0, amount: 360.0 },
            { sr: 3, seva: "POSTAGE", nos: 12, rate: 10.0, amount: 120.0 },
        ],
    },
    {
        title: "SHASHWAT SEVA",
        total: null,
        items: [
            {
                sr: 1,
                seva: "ABHISHEK NAIVEDYA & KUMKUMARCHAN",
                nos: 1,
                rate: 3500.0,
                amount: 3500.0,
            },
            {
                sr: 2,
                seva: "NANDADEEP SEVA - 1 DEEP",
                nos: 1,
                rate: 5000.0,
                amount: 5000.0,
            },
            {
                sr: 3,
                seva: "NANDADEEP SEVA - 2 DEEP",
                nos: 2,
                rate: 5000.0,
                amount: 10000.0,
            },
        ],
    },
    {
        title: "SPECIAL SEVAS FOR NAVRATRI",
        total: 2201.0,
        items: [
            { sr: 1, seva: "ABHISHEK NAIVEDYA", nos: 1, rate: 200.0, amount: 200.0 },
            { sr: 2, seva: "KUMKUMARCHAN", nos: 1, rate: 200.0, amount: 200.0 },
            { sr: 3, seva: "NANDADEEP", nos: 1, rate: 200.0, amount: 200.0 },
            { sr: 4, seva: "PURE GHEE DEEP", nos: 1, rate: 200.0, amount: 200.0 },
            {
                sr: 5,
                seva: "PURUSH ABHISHEK NAIVEDYA",
                nos: 1,
                rate: 200.0,
                amount: 200.0,
            },
            {
                sr: 6,
                seva: "PUSHPA ALANKAR SEVA",
                nos: 1,
                rate: 1201.0,
                amount: 1201.0,
            },
        ],
    },
    {
        title: "SPECIAL FESTIVAL DECORATION",
        total: null,
        items: [
            {
                sr: 1,
                seva: "DEEPOTSAV",
                nos: null,
                rate: "5k/Day",
                amount: 5000,
            },
            {
                sr: 2,
                seva: "MAKHAR FLOWER DECORATION",
                nos: null,
                rate: "1.5k/Day",
                amount: 1500,
            },
        ],
    },
];


const page = () => {
    const [displayState, setDisplayState] = useState(false)

    return (
        <>
            <div className="fixed inset-0 w-screen h-screen backdrop-blur-xl"></div>
            {displayState && <div className="fixed inset-0 z-40 w-screen h-screen bg-black/50 flex justify-center items-center" onClick={() => setDisplayState(false)}>
                <div className="h-1/3 w-full md:w-1/2  md:h-1/2 bg-amber-50 rounded-xl shadow-md p-4 flex items-center justify-center z-50">
                    <div className=" overflow-x-auto w-full h-full">
                        <table className="w-full text-sm md:text-base text-gray-700">
                            <thead>
                                <tr className="bg-gradient-to-r from-amber-100 to-yellow-100 text-gray-800 rounded-t-lg">
                                    <th className="px-3 py-2 text-left font-semibold">Sr No</th>
                                    <th className="px-3 py-2 text-left font-semibold">Bank Name</th>
                                    <th className="px-3 py-2 text-left font-semibold">Branch</th>
                                    <th className="px-3 py-2 text-left font-semibold">IFSC</th>
                                    <th className="px-3 py-2 text-left font-semibold">MICR</th>
                                    <th className="px-3 py-2 text-left font-semibold">Account No</th>
                                    <th className="px-3 py-2 text-left font-semibold">Remarks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-amber-200">
                                <tr className="hover:bg-amber-100/50 transition">
                                    <td className="px-3 py-2">1</td>
                                    <td className="px-3 py-2">Canara Bank</td>
                                    <td className="px-3 py-2">Mardol-Goa</td>
                                    <td className="px-3 py-2">CNRB0003636</td>
                                    <td className="px-3 py-2">403015030</td>
                                    <td className="px-3 py-2">3636101000009</td>
                                    <td className="px-3 py-2">Devakritya Seva, Shashwat /seva</td>
                                </tr>
                                <tr className="hover:bg-amber-100/50 transition">
                                    <td className="px-3 py-2">2</td>
                                    <td className="px-3 py-2">UCO Bank</td>
                                    <td className="px-3 py-2">Mardol-Goa</td>
                                    <td className="px-3 py-2">UCBA0000314</td>
                                    <td className="px-3 py-2">403028005</td>
                                    <td className="px-3 py-2">03140110039878</td>
                                    <td className="px-3 py-2">Anna Santarpan Seva /Annadan</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>}

            <div
                className="w-screen h-screen flex justify-center items-end bg-cover "
                style={{ backgroundImage: "url('/background/sevabg.jpg')" }}

            >
                <div className="h-[90%] w-full md:w-[70%] flex justify-around items-center bg-opacity-90 rounded-xl overflow-hidden shadow-lg">
                    <div className="h-[85%] w-full mb-10">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={70}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            loop={true}
                            className="h-full w-full flex justify-center"
                        >
                            {sevasList.map((sevaGroup, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-full w-full bg-black/25 text-white font-bold font-serif rounded-lg p-6 overflow-y-auto flex flex-col justify center items-center">
                                        <div className="h-[20%] w-full flex justify-center items-center">
                                            <h2 className="text-3xl md:text-3xl md:font-bold mb-4 text-center">{sevaGroup.title}</h2>
                                        </div>
                                        <div className="h-[60%] w-full flex justify-start items-start overflow-y-auto">
                                            <table className="w-full text-[10px] md:text-sm table-fixed border-collapse">
                                                <thead>
                                                    <tr className="h-12 ">
                                                        <th className="px-2 py-1 text-center">SR</th>
                                                        <th className="px-2 py-1 text-center">SEVA</th>
                                                        <th className="px-2 py-1 text-center">NOS</th>
                                                        <th className="px-2 py-1 text-center">RATE</th>
                                                        <th className="px-2 py-1 text-center">AMOUNT</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {sevaGroup.items.map((item) => (
                                                        <tr key={item.sr} className="h-12">
                                                            <td className="px-2 py-1 text-center align-middle h-12">{item.sr}</td>
                                                            <td className="px-2 py-1 text-left align-middle whitespace-normal break-words max-w-[200px]">
                                                                {item.seva}
                                                            </td>
                                                            <td className="px-2 py-1 text-center align-middle h-12">{item.nos ?? "-"}</td>
                                                            <td className="px-2 py-1 text-center align-middle h-12">
                                                                {typeof item.rate === "number" ? item.rate.toFixed(2) : item.rate}
                                                            </td>
                                                            <td className="px-2 py-1 text-center align-middle h-12">
                                                                {item.amount}.00
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>


                                        </div>
                                        <div className="h-[20%] w-full flex justify-between items-center px-5 ">

                                            <span className="mt-6 text-right text-lg font-semibold transition-all transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer" onClick={() => setDisplayState(true)} >bank details </span>
                                            {
                                                sevaGroup.total != null &&
                                                <div className="mt-6 text-right text-lg font-semibold">

                                                    Total: ₹{" "}
                                                    {sevaGroup.total}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div >
                </div >
            </div >


        </>
    );
};

export default page;
