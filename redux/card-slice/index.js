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
  finalFilteredEvents: [],
  status: "",
};
const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    filterEventsType: (state, action) => {
      if (!action.payload) {
        const filtered = state.events.filter((item) => item);
        state.finalFilteredEvents = filtered;
        state.filteredEvents = filtered;
      } else {
        const filtered = state.events.filter(
          (item) => item.event_type === action.payload
        );
        state.filteredEvents = filtered;
        state.finalFilteredEvents = filtered;
      }
    },
    filterEventLocationAndTime: (state, action) => {
      if (action.payload.length === 0) {
        state.finalFilteredEvents = state.filteredEvents;
      } else {
        const locationAndTimeFilter = state.filteredEvents.filter(
          (item) =>
            action.payload.includes(item.location) &&
            action.payload.includes(item.date.day)
        );
        state.finalFilteredEvents = locationAndTimeFilter;
      }
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
        state.finalFilteredEvents = action.payload.events;
        state.status = "success";
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { filterEventsType, clearFilter, locationAndTimeFilter } =
  cardSlice.actions;
export default cardSlice.reducer;
