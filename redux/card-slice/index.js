import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk(
  "cardSlice/fetchEvents",
  async () => {
    const { data } = await axios.get(
      "https://0d9082fe-9168-4072-8adc-bcf471d88c4a.mock.pstmn.io"
    );
    return data;
  }
);

const initialState = {
  events: [],
  filteredEvents: [],
  status: "",
};
const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    filterEventsType: (state, action) => {
      const filtered = state.events.filter(
        (item) => item.event_type === action.payload
      );
      state.filteredEvents = filtered;
    },
    clearFilter: (state) => {
      state.filteredEvents = state.events;
    },
    filterEventLocation: (state, action) => {
      const filtered = state.filteredEvents.filtered(
        (item) => item.location === action.payload
      );
      const array = state.filteredEvents.concat(filtered);
      const newSet = new Set(array);
      state.filteredEvents = Array.from(newSet);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload.events;
        state.filteredEvents = action.payload.events;
        state.status = "success";
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { filterEventsType, clearFilter } = cardSlice.actions;
export default cardSlice.reducer;
