"use client"
import React from 'react'

import ImageZoom from '../../components/ImageZoom'
import { useDispatch, useSelector } from 'react-redux';
import { setZoomState } from '../redux/zoomSlice';

const page = () => {
    const dispatch = useDispatch()
    const zoomState = useSelector((state) => state.zoom.zoomState);

    const handleClick = () => {
        dispatch(setZoomState(true))
    }

    const link = "/diety/1.jpg"

    return (
        <div>
            {
                zoomState && <ImageZoom link={link} />
            }

            <img onClick={handleClick} src={link} alt="" />

        </div>
    )
}

export default page