"use-client";
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
    filterEventByLocation: (state, action) => {
      const { locationFilters } = action.payload;

      if (!locationFilters || !locationFilters.length) {
        state.finalFilteredEvents = state.filteredEvents;
      } else {
        state.finalFilteredEvents = state.filteredEvents.filter((event) =>
          locationFilters.includes(event.location)
        );
      }
    },
    filterEventByTime: (state, action) => {
      const { timeFilters } = action.payload;

      if (!timeFilters || !timeFilters.length) {
        state.finalFilteredEvents = state.filteredEvents;
      } else {
        state.finalFilteredEvents = state.filteredEvents.filter((event) =>
          timeFilters.includes(event.date.day)
        );
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
export const {
  filterEventsType,
  clearFilter,
  filterEventByLocation,
  filterEventByTime,
} = cardSlice.actions;
export default cardSlice.reducer;
