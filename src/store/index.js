import { configureStore } from "@reduxjs/toolkit";

import positionSlice from "./reducers/position"
import projectsSlice from "./reducers/projects"
import experiencesSlice from "./reducers/experiences"
import certificatesSlice from "./reducers/certificates"

// TODO studySlice & testimonialsSlice
const store = configureStore({
  reducer: {
    position: positionSlice,
    projects: projectsSlice,
    experiences: experiencesSlice,
    certificates: certificatesSlice,
  }
})

export default store