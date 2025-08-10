'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ImageZoom from '../../components/ImageZoom';
import { useDispatch, useSelector } from 'react-redux';
import { setZoomState } from '../redux/zoomSlice';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const page = () => {
    const images = Array.from({ length: 16 }, (_, i) => `/gallery/${i + 1}.jpg`);
    const dispatch = useDispatch();
    const zoomState = useSelector((state) => state.zoom.zoomState);
    const [link, setlink] = useState("");
    const galleryRef = useRef()

    const handleClick = (path) => {
        setlink(path);
        dispatch(setZoomState(true));
    };

    useGSAP(() => {
        const boxes = gsap.utils.toArray(galleryRef.current.children);

        gsap.fromTo(
            boxes,
            {
                opacity: 0,
                x: 50,
                scale: 0.6
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.2,
                scale: 1
                ,
                ease: 'elastic.inOut',
            }
        );
    }, { dependencies: [], scope: galleryRef });

    return (
        <>
            {zoomState && <ImageZoom link={link} />}
            <div className="mt-[10vh] md:mt-[8vh] w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-white">
                <div ref={galleryRef} className="w-[90%] h-full grid grid-cols-2 md:w-[80%] md:h-full md:grid-cols-3 gap-2">
                    {images.map((path, index) => (
                        <div
                            key={index}
                            className="relative aspect-square transition-all transform duration-300 ease-in-out hover:scale-[101%] "
                            onClick={() => handleClick(path)} // ✅ FIXED HERE
                        >
                            <div className="absolute top-0 left-0 w-full h-full transition-all transform duration-300 ease-in-out hover:bg-amber-50/20 z-20"></div>
                            <Image
                                src={path}
                                alt={`Image ${index + 1}`}
                                fill
                                className="object-cover rounded-md overflow-hidden"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </>
    );

};

export default page;
