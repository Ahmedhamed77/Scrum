import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authSlicesReducers} from './endpoints';

export interface AuthTokenState {
  authorizedUser: {};
}
const initialState: AuthTokenState = {
  authorizedUser: {},
};

const authSlice = createSlice({
  name: authSlicesReducers.auth,
  initialState,
  reducers: {
    saveAuthorizedUser: (state, action: PayloadAction<any>) => {
      state.authorizedUser = action.payload;
    },
  },
});

export const {saveAuthorizedUser} = authSlice.actions;

export default authSlice.reducer;
