import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import projectSlice from "./project-slice";

 const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        activeProject: projectSlice.reducer
    }
})

export default store;