import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessages: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, 1);// ek ek krk remove krte raho agar 25 se jyada ho rha h toh
            state.messages.push(action.payload);
        },
    },
});

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;