import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: 'en-US'
}
const globalSlice = createSlice({
    name: "globalSlice",
    initialState,
    reducers: {
        changeLenguage(state, action) {
            state.language = action.payload
        }
    }
})

export const { changeLenguage } = globalSlice.actions
export default globalSlice.reducer