import http from "@/hooks/Engine";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Types pour l'inscription et la connexion
type SignInFormData = {
  username: string;
  password: string;
  birthday: Date;
  study: string;
  sex: string;
};

type LoginFormData = {
  username: string;
  password: string;
};

type AuthState = {
  items: any[];
  user: any | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: AuthState = {
  items: [],
  user: null,
  token: null,
  status: "idle",
  error: null,
};

// 🔹 Thunk pour l'inscription
export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (data: SignInFormData, { rejectWithValue }) => {
    try {
      const response = await http.post("/server/user", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        `Erreur lors de l'inscription de l'user : ${error.message}`
      );
    }
  }
);

// 🔹 Thunk pour le login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await http.post("/server/login", data);
      return response.data; // Supposons que l'API renvoie user + token
    } catch (error: any) {
      return rejectWithValue(`Erreur lors de la connexion : ${error.message}`);
    }
  }
);

// 🔹 Thunk pour le login
export const getUser = createAsyncThunk(
  "user/getUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await http.get(`/server/user/${id}`);
      return response.data; // Supposons que l'API renvoie user + token
    } catch (error: any) {
      return rejectWithValue(`Erreur lors de l'obtention de l'user : ${error.message}`);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signinUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
