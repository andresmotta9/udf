import { FunctionComponent } from "react";
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PrivateRoute } from "../uidf/routes/PrivateRoute";
import { UidfPage } from "../uidf/pages/UidfPage";

export const AppRouter: FunctionComponent = () => {
	return (
		<>
			<Routes>
				{/* Login */}
				<Route path="/auth/*" element={<AuthRoutes />} />

				{/* Uidf App */}
				<Route path="/*" element={
					//@ts-ignore
					<PrivateRoute>
						<UidfPage />
					</PrivateRoute>
				} />
			</Routes>
		</>
	)
}
