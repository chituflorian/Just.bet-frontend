"use client";
import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import chatReducer from "./chatReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  global: globalReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
