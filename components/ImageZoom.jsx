"use client";
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useDispatch } from 'react-redux';
import { setZoomState } from '../app/redux/zoomSlice';

const ImageZoom = (props) => {
    const dispatch = useDispatch();
    const [isClose, setisClose] = useState(false);
    const imageRef = useRef();

    const handleClose = () => {
        if (!isClose) {
            setisClose(true);
            gsap.fromTo(imageRef.current,
                { scale: 1 },
                {
                    scale: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                    onComplete: () => dispatch(setZoomState(false))
                }
            );
        }
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isClose]);

    useGSAP(() => {
        gsap.fromTo(imageRef.current,
            { scale: 0 },
            { scale: 1, duration: 1, ease: 'power2.inOut' }
        );
    });

    return (
        <div className="fixed inset-0 w-screen h-screen backdrop-blur-sm z-[100] flex justify-center items-center">
            <div className='fixed inset-0 w-full h-full bg-black opacity-50'></div>

            <div className="h-[90%] w-[90%] flex justify-center items-center z-50">
                <div className='fixed inset-0 w-full h-full' onClick={handleClose}></div>
                <img
                    ref={imageRef}
                    src={props.link}
                    alt="Image"
                    className="max-w-full max-h-full object-contain rounded-lg scale-0"
                />
            </div>
        </div>
    );
};

export default ImageZoom;
