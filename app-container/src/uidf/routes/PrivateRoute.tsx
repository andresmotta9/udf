import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { ChildrenProps } from "../../types/childrenType";

export const PrivateRoute = ({ children }: ChildrenProps) => {

	const { logged } = useContext(AuthContext);
	return (logged)
		? children
		: <Navigate to="/auth/login" />
}
