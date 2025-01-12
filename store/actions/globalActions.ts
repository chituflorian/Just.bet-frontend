export const UPDATE_SOUND_VOLUME = "UPDATE_SOUND_VOLUME";
export const UPDATE_SIDEBAR_EXPANDED = "UPDATE_SIDEBAR_EXPANDED";
export const UPDATE_CHAT_EXPANDED = "UPDATE_CHAT_EXPANDED";
export const UPDATE_CONFIG = "UPDATE_CONFIG";

export interface UpdateSoundVolume {
  type: typeof UPDATE_SOUND_VOLUME;
  payload: {
    soundVolumePercentage: number;
  };
}

export interface UpdateSidebarExpanded {
  type: typeof UPDATE_SIDEBAR_EXPANDED;
  payload: {
    sidebarExpanded: boolean;
  };
}

export interface UpdateChatExpanded {
  type: typeof UPDATE_CHAT_EXPANDED;
  payload: {
    chatExpanded: boolean;
  };
}

export interface UpdateConfigs {
  type: typeof UPDATE_CONFIG;
  payload: {
    config: any;
  };
}

export type GlobalAction = UpdateSoundVolume | UpdateSidebarExpanded | UpdateChatExpanded | UpdateConfigs;
