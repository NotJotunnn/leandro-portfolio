import { createSlice } from "@reduxjs/toolkit";
import projects from "../Projects";

const projectsSlice = createSlice({
  name: "projects",
  initialState: projects,
});

export default projectsSlice.reducer;
