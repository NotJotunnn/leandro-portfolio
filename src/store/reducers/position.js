import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: "position",
  initialState: 0,
  reducers: {
    changePosition: (state, { payload }) => {
      return payload;
    },
  },
});

export const { changePosition } = positionSlice.actions;

export default positionSlice.reducer;
