import { createSlice } from '@reduxjs/toolkit'

const initialState = {
currentState:{}||null
}

const ReduxState = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser:(state,action)=>{
state.currentState = action.payload
    },
    loginUser:(state,action)=>{
state.currentState = action.payload
    }
  }
});

export const {registerUser} = ReduxState.actions

export default ReduxState.reducer