"use client"
import { configureStore } from '@reduxjs/toolkit';
import zoomReducer from "./zoomSlice"

export const store = configureStore({
    reducer: {
        zoom: zoomReducer
    },
});