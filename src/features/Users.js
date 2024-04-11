import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../FakeData';

export const usersSlice = createSlice({
	name: 'usersSlice',
	initialState: { value: UsersData },
	reducers: {
		addUser: (state, action) => {
			state.value.push(action.payload);
		},
		updateUser: (state, action) => {
			state.value.map((user) => {
				if (user.id === action.payload.id) {
					user.username = action.payload.username;
				}
			});
		},
		deleteUser: (state, action) => {
			state.value = state.value.filter((user) => user.id !== action.payload.id);
		},
	},
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
