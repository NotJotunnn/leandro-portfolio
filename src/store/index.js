import { configureStore } from "@reduxjs/toolkit";

import positionSlice from "./reducers/position";
import projectsSlice from "./reducers/projects";
import experiencesSlice from "./reducers/experiences";
import certificatesSlice from "./reducers/certificates";
import studiesSlice from "./reducers/studies";
import testimonialsSlice from "./reducers/testimonials";

const store = configureStore({
  reducer: {
    position: positionSlice,
    projects: projectsSlice,
    experiences: experiencesSlice,
    certificates: certificatesSlice,
    studies: studiesSlice,
    testimonials: testimonialsSlice,
  },
});

export default store;
