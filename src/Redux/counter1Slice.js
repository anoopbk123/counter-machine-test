import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    value: 0,
    max: 10,
    min: 0,
  },
  {
    id: 2,
    value: 0,
    max: 10,
    min: 0,
  },
  {
    id: 3,
    value: 0,max: 10,
    min: 0,
  },
  {
    id: 4,
    value: 0,
    max: 10,
    min: 0,
  },
];
const count1Slice = createSlice({
  initialState,
  name: "count",
  reducers: {
    add: (state, action) => {
      const id = action.payload;
      const item = state.find((value) => {
        return value.id === id;
      });
      
      if(item.value < item.max){
        item.value = item.value + 1;
      }
      
    },
    minus: (state, action) => {
      const id = action.payload;
      const item = state.find((value) => {
        return value.id === id;
      });
      if(item.value > item.min){
      item.value = item.value - 1;
      }
    },
    reset:(state)=>{
      state = initialState
      return state
    }
  },
});
export const { add, minus, reset } = count1Slice.actions;
export default count1Slice.reducer;
