const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
