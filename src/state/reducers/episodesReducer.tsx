import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Episodes from "../../models/Episode";

const initialValue: Episodes[] = []

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState: {
        value: initialValue,
    },
    reducers: {
        updateEpisodeList: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { updateEpisodeList } = episodesSlice.actions
export default episodesSlice.reducer