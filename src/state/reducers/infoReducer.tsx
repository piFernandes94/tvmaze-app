import { createSlice } from "@reduxjs/toolkit";
import ShowInfo from "../../models/ShowInfo";

const initialValue : ShowInfo = {
    id: 0,
    image: { medium: "", original: "" },
    name: "",
    officialSite: "",
    summary: "",
    type: "",
    url: "",
}

export const infoSlice = createSlice({
    name: 'info',
    initialState: {
        value: initialValue
    },
    reducers: {
        updateShowInfo: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { updateShowInfo } = infoSlice.actions
export default infoSlice.reducer