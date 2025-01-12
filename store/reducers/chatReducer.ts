"use client";
import { GlobalAction } from "store/actions/globalActions";

export interface GlobalReducer {}

const initialState: GlobalReducer = {};

const globalReducer = (state = initialState, action: GlobalAction): GlobalReducer => {
  switch (action.type) {
    default:
      return state;
  }
};

export default globalReducer;
