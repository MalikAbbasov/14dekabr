import { createSlice } from '@reduxjs/toolkit'
import todoSlice from '../todo/todoSlice'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 1
  },
  reducers: {
    sum: (state,action) =>{
        state.value=action.payload[0]+action.payload[1]
    },
    sub :(state,action) =>{
        state.value=action.payload[0]-action.payload[1]
    },
    multip :(state,action) =>{
        state.value=action.payload[0]*action.payload[1]
    },
    divide :(state,action) =>{
        state.value=action.payload[0]/action.payload[1]
    },
  }
})

export const {sum,sub,multip,divide} =todoSlice.actions

export default calculatorSlice.reducer