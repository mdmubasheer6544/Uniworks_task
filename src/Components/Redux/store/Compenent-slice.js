import { createSlice } from "@reduxjs/toolkit";


const compSlice = createSlice({
  name: "comp",
  initialState: {
    BOQ_total: 0,
    Project_total: 0,
    Work_total: 0,
    Material_total: 0,
    unit_title: "",
  },
  reducers: {
    calculateBOQ(state, action) {
      state.BOQ_total = action.payload;
    },

    calculateWorkTotal(state, action) {
      state.Work_total = action.payload.qty * action.payload.rate;
    },

    calculateMaterialTotal(state, action) {
      state.Material_total = action.payload.qty * action.payload.rate;
    },
    passTitle(state, action) {
      state.unit_title = action.payload;
    },

    calculateProjectTotal(state, action) {
      state.Project_total = state.Work_total + state.Material_total;
    },
  },
});

export const compActions = compSlice.actions;

export default compSlice;
