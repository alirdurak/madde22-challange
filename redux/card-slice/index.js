"use-client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asenkron işlemle data çekme için thunk tanımlanıyor
export const fetchEvents = createAsyncThunk(
  "cardSlice/fetchEvents",
  async () => {
    const { data } = await axios.get(
      "https://0d9082fe-9168-4072-8adc-bcf471d88c4a.mock.pstmn.io"
    );
    return data;
  }
);

// Store için başlangıç durumu tanımlanıyor
const initialState = {
  events: [],
  filteredEvents: [],
  finalFilteredEvents: [],
  status: "",
};

// Reducer slice tanımlanıyor
const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    // Etkinlikleri türlerine göre filtreleme
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
    // Etkinlikleri konumlarına göre filtreleme
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
    // Etkinlikleri tarihlerine göre filtreleme
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
    // Etkinlikleri arama sorgusuna göre filtreleme
    searchEvents: (state, action) => {
      const searchQuery = action.payload.toLowerCase();

      if (searchQuery.trim() === "") {
        state.finalFilteredEvents = state.filteredEvents;
      } else {
        state.finalFilteredEvents = state.events.filter((event) =>
          event.event_name.toLowerCase().includes(searchQuery)
        );
      }
    },
  },
  // Ekstra reducerlar tanımlanıyor
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

// Reducer fonksiyonları export ediliyor
export const {
  filterEventsType,
  clearFilter,
  filterEventByLocation,
  filterEventByTime,
  searchEvents,
} = cardSlice.actions;

// Default export
export default cardSlice.reducer;
