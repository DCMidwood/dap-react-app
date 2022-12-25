import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'activeProject',
    initialState: {
        activeProjectGlobalid: "",
        activeProjectName: "",
        activeProjectStatus: "",
        activeProjectPhase: "", 
    },
    reducers: {
        changeActiveProject(state, action){
            const changedProject = action.payload;

            state.activeProjectGlobalid = changedProject.projectGlobalId
            state.activeProjectName = changedProject.projectName
            state.activeProjectStatus = changedProject.projectStatus
            state.activeProjectPhase = changedProject.projectPhase
        }
    }
})

export const projectActions = projectSlice.actions;

export default projectSlice