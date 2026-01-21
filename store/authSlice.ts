import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode, JwtPayload } from "jwt-decode"; // Import JwtPayload
import type { AppDispatch } from "./store"; // Assuming store.ts will export AppDispatch
import { User } from "@/lib/types";

export interface AuthState {
  isLoading: boolean;
  isInitialized: boolean;
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  colleges: any[]; // TODO: Define College type if structure is known and managed here
  errMess: string | null;
  isMobileDevice: boolean; // True if not desktop
  os: "desktop" | "android" | "ios" | string; // More specific OS type
}

interface InitializeAuthPayload {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  isMobileDevice: boolean; // Always include, default to false for desktop/error cases
  os: AuthState["os"]; // Use the OS type from AuthState
}

interface LoginSuccessPayload {
  token: string;
  user: User;
  deactivated?: boolean;
}

// --- Async Thunks ---
export const initializeAuth = createAsyncThunk(
  "auth/initialize",
  async (): Promise<InitializeAuthPayload> => {
    const defaultPayload: InitializeAuthPayload = {
      isAuthenticated: false,
      token: null,
      user: null,
      isMobileDevice: false,
      os: "desktop",
    };

    if (typeof window !== "undefined" && window.localStorage) {
      const token = localStorage.getItem("token");
      const userString = localStorage.getItem("creds");
      const user = userString ? (JSON.parse(userString) as User) : null;

      if (token && user) {
        try {
          const decoded = jwtDecode<JwtPayload & { exp: number }>(token); // Add exp to JwtPayload
          if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem("token");
            localStorage.removeItem("creds");
            return defaultPayload; // Token expired
          }

          const userAgent = window.navigator.userAgent;
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
          let os: AuthState["os"] = "desktop";
          if (/Android/i.test(userAgent)) os = "android";
          else if (/iPhone|iPad|iPod/i.test(userAgent)) os = "ios";

          return {
            isAuthenticated: true,
            token,
            user,
            isMobileDevice: isMobile,
            os,
          };
        } catch (error) {
          console.error("Invalid token:", error);
          localStorage.removeItem("token");
          localStorage.removeItem("creds");
          return { ...defaultPayload, isMobileDevice: defaultPayload.isMobileDevice, os: defaultPayload.os }; // Return default but keep detected device info if possible
        }
      }
    }
    return defaultPayload;
  }
);

export const logoutUser = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("token");
      localStorage.removeItem("creds");
    }
    // Dispatching an action from the same slice reducer is fine
    dispatch(authSlice.actions.receiveLogout());
  }
);

// --- Initial State ---
const initialState: AuthState = {
  isLoading: false,
  isInitialized: false,
  isAuthenticated: false,
  token: null,
  user: null,
  colleges: [], // Should be moved to a relevant slice if not general auth info
  errMess: null,
  isMobileDevice: false,
  os: "desktop",
};

// --- Slice Definition ---
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    requestLogin: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false; // Should set to false during login request
      state.errMess = null; // Clear previous errors
    },
    receiveLogin: (state, action: PayloadAction<LoginSuccessPayload>) => {
      const { token, user, deactivated } = action.payload;
      state.isLoading = false;
      state.isAuthenticated = !deactivated; // User is authenticated if not deactivated
      state.token = token;
      state.user = user;
      state.errMess = null; // Clear error on successful login

      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("token", token);
        localStorage.setItem("creds", JSON.stringify(user));
      }
    },
    loginError: (state, action: PayloadAction<string | null | undefined>) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.errMess = action.payload || "Login failed";
    },
    requestLogout: (state) => { // This action might be redundant if logoutUser thunk is always used
      state.isLoading = true;
    },
    receiveLogout: (state) => { // This is now dispatched by logoutUser thunk
      state.isLoading = false;
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.errMess = null;
      // Potentially reset isMobileDevice and os to defaults or handle them separately
    },
    collegesList: (state, action: PayloadAction<any[]>) => { // TODO: Define College type
      state.colleges = action.payload;
    },
    checkMobileDevice: (state, action: PayloadAction<AuthState["os"]>) => {
      // This action seems to imply isMobileDevice is always true if called.
      // And it sets the OS type.
      state.isMobileDevice = action.payload !== "desktop";
      state.os = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initializeAuth.fulfilled, (state, action: PayloadAction<InitializeAuthPayload>) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isMobileDevice = action.payload.isMobileDevice;
        state.os = action.payload.os;
        state.isLoading = false;
        state.isInitialized = true;
      })
      .addCase(initializeAuth.rejected, (state, action) => { // Action can have error info
        state.isLoading = false;
        state.isInitialized = true; // Even if failed, mark initialized
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.errMess = action.error?.message || "Initialization failed";
      });
  },
});

export const {
  requestLogin,
  receiveLogin,
  loginError,
  requestLogout, // Keep if used directly, otherwise can be removed if logoutUser thunk is sole method
  receiveLogout, // Keep as it's used by logoutUser thunk
  checkMobileDevice,
  // collegesList action is not exported in original, decide if it should be
} = authSlice.actions;

export default authSlice.reducer;
