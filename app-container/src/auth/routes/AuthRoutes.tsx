import { FunctionComponent } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"


export const AuthRoutes: FunctionComponent = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />

			<Route path="/*" element={<Navigate to="/auth/login" />} />
		</Routes>
	)
}
