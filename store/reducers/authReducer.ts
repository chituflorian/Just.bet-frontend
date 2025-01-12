"use client";
import { AuthAction } from "store/actions/authActions";

export interface AuthReducer {}

const initialState: AuthReducer = {};

const authReducer = (state = initialState, action: AuthAction): AuthReducer => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
