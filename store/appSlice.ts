import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AppState {
  loading: boolean;
  error: string | null;
  initialized: boolean;
  activeMenu: string; // Consider a union type for more specificity e.g., 'Clubs' | 'Events' | ...
}

const initialState: AppState = {
  loading: false,
  error: null,
  initialized: false,
  activeMenu: "Clubs",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    asyncActionStart: (state) => {
      state.loading = true;
      state.error = null; // Clear previous errors on new action start
    },
    asyncActionFinish: (state) => {
      state.loading = false;
    },
    asyncActionError: (state, action: PayloadAction<string | null | undefined>) => { // Payload can be string or null
      //console.log("Async Error Payload:", action.payload); // For debugging
      state.loading = false;
      state.error = action.payload || "An unknown error occurred"; // Provide a fallback for undefined payload
    },
    setActiveMenu: (state, action: PayloadAction<string>) => { // Payload is the new active menu string
      state.activeMenu = action.payload;
    },
    appLoaded: (state) => {
      state.initialized = true;
    },
  },
});

export const {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
  setActiveMenu,
  appLoaded,
} = appSlice.actions;

export default appSlice.reducer;
