import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessNameInputValue: "",
  businessLocationInputValue: ""
};

const libraryDetailSlice = createSlice({
  name: "overviewDescription",
  initialState,
  reducers: {
    setBusinessName: (state, action) => {
      state.businessNameInputValue = action.payload;
    },
    setBusinessLocation: (state, action) => {
      state.businessLocationInputValue = action.payload;
    }
  }
});

export const { setBusinessName, setBusinessLocation } = libraryDetailSlice.actions;
export default libraryDetailSlice.reducer;
