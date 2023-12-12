import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"
import { types } from "../types/types";
import { ChildrenProps } from "../../types/childrenType";

const init = () => {
	const userJson = localStorage.getItem('user');
	const user = userJson !== null ? JSON.parse(userJson) : null;
	return {
		logged: !!user,
		user: user,
	}
}

export const AuthProvider = ({ children }: ChildrenProps) => {
	const [authState, dispatch] = useReducer(AuthReducer, {}, init);

	const login = async (username = '', password = '') => {
		if (username !== 'admin' && password !== 'admin') return;
		const user = {
			id: username,
			username,
			password
		}
		const action = {
			type: types.login,
			payload: user
		}
		localStorage.setItem('user', JSON.stringify(user));
		dispatch(action);
	}

	const logout = () => {
		const action = {
			type: types.logout
		}
		dispatch(action);
	}

	return (
		// @ts-ignore
		<AuthContext.Provider value={{
			...authState,
			login,
			logout
		}}>
			{children}
		</AuthContext.Provider>
	)
}
