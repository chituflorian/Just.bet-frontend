"use client";
import {
  GlobalAction,
  UPDATE_CONFIG,
  UPDATE_CHAT_EXPANDED,
  UPDATE_SIDEBAR_EXPANDED,
  UPDATE_SOUND_VOLUME,
} from "store/actions/globalActions";

export interface GlobalReducer {
  config: any;
  percentageSoundVolume: number;
  sidebarMenuExpanded: boolean;
  chatSpaceExpanded: boolean;
}

const initialState: GlobalReducer = {
  config: null,
  percentageSoundVolume: 20 / 100,
  sidebarMenuExpanded: false,
  chatSpaceExpanded: false,
};

const globalReducer = (state = initialState, action: GlobalAction): GlobalReducer => {
  switch (action.type) {
    case UPDATE_SOUND_VOLUME:
      return {
        ...state,
        percentageSoundVolume: action[UPDATE_SOUND_VOLUME].payload,
      };
    case UPDATE_SIDEBAR_EXPANDED:
      return {
        ...state,
        sidebarMenuExpanded: action[UPDATE_SIDEBAR_EXPANDED].payload,
      };
    case UPDATE_CHAT_EXPANDED:
      return {
        ...state,
        chatSpaceExpanded: action[UPDATE_CHAT_EXPANDED].payload,
      };
    case UPDATE_CONFIG:
      return {
        ...state,
        config: action[UPDATE_CONFIG].payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
