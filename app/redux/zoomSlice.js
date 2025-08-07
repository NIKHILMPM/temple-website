import { createSlice } from "@reduxjs/toolkit";

export const zoomSlice = createSlice({
    name: 'zoom',
    initialState: {
        zoomState: false
    },
    reducers: {
        setZoomState: (state, action) => {
            state.zoomState = action.payload;
        }
    }
});

export const { setZoomState } = zoomSlice.actions;
export default zoomSlice.reducer;
