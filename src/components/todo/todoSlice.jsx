import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
    id:0,
  },
  reducers:{
    addTodo:(state,action)=>{
        state.value.push(action.payload)
    }
  }
})

export const {addTodo}=todoSlice.actions
export default todoSlice.reducer