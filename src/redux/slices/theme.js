import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lightTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLightThemeDark: (state) => {
      state.lightTheme = !state.lightTheme;
    },
  },
});

export const { setLightThemeDark } = themeSlice.actions;

export default themeSlice.reducer;
