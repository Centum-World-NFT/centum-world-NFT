import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlaylist } from "../apis/fetchPlaylistApi";

export const allPlaylist = createAsyncThunk("data", async () => {
    try{
        const response = await fetchPlaylist();
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})