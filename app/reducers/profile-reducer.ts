import actions from "~/actions";
import type { UserProfile } from "~/types";

type StateType = {
  user: UserProfile | null;
  loading: boolean;
  error: Error | null;
};

type ActionType = {
  type: (typeof actions.profile)[keyof typeof actions.profile];
  payload?: any;
  error?: Error;
};

const initialState: StateType = {
  user: null,
  loading: false,
  error: null,
};

const profileReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING:
      return { ...state, loading: true };

    case actions.profile.DATA_FETCH_ERROR:
      return { ...state, loading: false, error: action.error };

    case actions.profile.DATA_FETCHED:
      return { ...state, loading: false, user: action.payload };

    default:
      return state;
  }
};

export { initialState, profileReducer };
