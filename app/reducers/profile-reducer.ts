import type { UserProfile } from "~/types";

type stateType = {
  user: UserProfile | null;
  loading: boolean;
  error: Error | null;
};

const initialState: stateType = {
  user: null,
  loading: false,
  error: null,
};

const profileReducer = (state: stateType, action: { type: string }) => {
  switch (action.type) {
    case "":
      break;

    default:
      return state;
  }
};

export { initialState, profileReducer };
