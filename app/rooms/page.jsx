"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Footer from "../../components/Footer";
import ImageZoom from '../../components/ImageZoom'
import { useDispatch, useSelector } from 'react-redux';
import { setZoomState } from '../redux/zoomSlice';
import { useState } from "react";


const room = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const Page = () => {
    const dispatch = useDispatch()
    const zoomState = useSelector((state) => state.zoom.zoomState);
    const [imglink, setImglink] = useState("")

    const handleClick = (link) => {
        setImglink(link)
        dispatch(setZoomState(true))
    }


    return (
        <div className="overflow-hidden">
            <div className="absolute inset-0 w-full h-full backdrop-blur-sm" />
            {zoomState && <ImageZoom link={imglink} />}
            {/* for pc */}
            <div className="hidden md:block">
                <div
                    className="w-screen h-screen flex justify-center items-end bg-center bg-cover"
                    style={{ backgroundImage: "url('/background/background.jpg')" }}
                >
                    <div className="group relative mb-8 h-[90%] w-[70%] flex justify-center items-center bg-amber-900/30 bg-opacity-90 rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-amber-50 to-amber-100 shadow-black shadow-2xs" ></div>
                        <div className="absolute h-[97%] w-[98%] rounded-2xl overflow-hidden">
                            <Swiper
                                modules={[Autoplay, Pagination, EffectFade]}
                                slidesPerView={1}
                                loop={true}
                                effect="fade"
                                speed={500}
                                autoplay={{ delay: 3000 }}
                                pagination={{ clickable: true }}
                                className="h-full w-full"
                            >
                                {room.map((link, index) => (
                                    <SwiperSlide key={index}>

                                        <div
                                            onClick={() => handleClick(`/rooms/${link}`)}
                                            className="h-full w-full bg-cover bg-center"
                                            style={{ backgroundImage: `url('/rooms/${link}')` }}

                                        >

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className=" rounded-bl-3xl rounded-tl-3xl absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/90 to-amber-200/90 translate-x-[90%] transition-transform duration-700 ease-in-out hover:translate-x-0 z-30">
                            <div className="group/arrow relative h-full w-full">
                                <div className="text-white p-3 absolute left-0 h-full flex flex-col justify-center items-start group-hover/arrow:opacity-0 ">
                                    <ArrowBackIosIcon />
                                </div>
                                <div className="absolute w-full h-full flex items-center justify-center opacity-0 group-hover/arrow:opacity-100">
                                    <div className="w-[80%] h-[50%] bg-black/20 rounded-2xl p-6 flex flex-col justify-center text-white font-semibold text-lg space-y-4 shadow-xl">

                                        <div className="flex justify-between border-b border-white pb-2">
                                            <span>AC ROOM - KULAVI</span>
                                            <span>Rs. 1700/-</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white pb-2">
                                            <span>AC ROOM - OTHERS</span>
                                            <span>Rs. 2000/-</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white pb-2">
                                            <span>NON AC ROOM - KULAVI</span>
                                            <span>Rs. 400/-</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>NON AC ROOM - OTHERS</span>
                                            <span>Rs. 600/-</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* for phone */}
            <div className="block md:hidden">
                <div
                    className="w-screen h-screen flex justify-center items-center bg-center bg-cover"
                    style={{ backgroundImage: "url('/background/background.jpg')" }}
                >
                    <div className="h-[70%] w-[98%] flex flex-col justify-center items-center bg-amber-900/30 bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
                        <div className="h-[45%] w-full rounded-2xl ">
                            <Swiper
                                modules={[Autoplay, Pagination, EffectFade]}
                                slidesPerView={1}
                                loop={true}
                                effect="fade"
                                speed={500}
                                autoplay={{ delay: 3000 }}
                                pagination={{ clickable: true }}
                                className="h-full w-full"
                            >
                                {room.map((link, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="h-full w-full bg-cover bg-center"
                                            style={{ backgroundImage: `url('/rooms/${link}')` }}
                                        ></div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="h-[55%] w-full bg-gradient-to-bl from-amber-200/90 to-amber-100/90 rounded-br-xl rounded-bl-xl p-6 flex flex-col justify-center text-white font-semibold text-lg space-y-4 shadow-xl">
                            <div className="flex justify-between border-b border-white pb-2">
                                <span>AC ROOM - KULAVI</span>
                                <span>Rs. 1700/-</span>
                            </div>
                            <div className="flex justify-between border-b border-white pb-2">
                                <span>AC ROOM - OTHERS</span>
                                <span>Rs. 2000/-</span>
                            </div>
                            <div className="flex justify-between border-b border-white pb-2">
                                <span>NON AC ROOM - KULAVI</span>
                                <span>Rs. 400/-</span>
                            </div>
                            <div className="flex justify-between">
                                <span>NON AC ROOM - OTHERS</span>
                                <span>Rs. 600/-</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Page;
