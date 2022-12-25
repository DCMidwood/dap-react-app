import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        projectDetailIsVisible: false
    },
    reducers: {
        toggleProjectDetails(state){
            state.projectDetailIsVisible = !state.projectDetailIsVisible
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice