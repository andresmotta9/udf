import { lazy, Suspense, FunctionComponent, useContext } from "react";
import { Navigate, Route, Routes } from 'react-router-dom'
import { Box, Toolbar } from '@mui/material';

import { NavBar, SideBar } from '../components';
import { AuthContext } from "../../auth";

const DataConnection = lazy(() => import("data_mf/connection"));
const DataSource = lazy(() => import("data_mf/source"));
const Dashboard = lazy(() => import("dashboard_mf/dashboard"));

const drawerWidth = 240;

export const UidfPage: FunctionComponent = (): JSX.Element => {

	const { user } = useContext(AuthContext);

	return (
		<Box sx={{ display: 'flex' }}>
			<NavBar drawerWidth={drawerWidth} />
			<SideBar drawerWidth={drawerWidth} />
			<Box
				component='main'
				sx={{ flexGrow: 1, p: 3 }}
			>
				<Toolbar />
				<Routes>
					<Route path='dashboard' element={
						<Suspense fallback={<small>Loading...</small>}>
							<Dashboard name={user.username}/>
						</Suspense>
					} />
					<Route path='data/connections' element={
						<Suspense fallback={<small>Loading...</small>}>
							<DataConnection />
						</Suspense>
					} />
					<Route path='data/source' element={
						<Suspense fallback={<small>Loading...</small>}>
							<DataSource />
						</Suspense>
					} />
					<Route path='/*' element={<Navigate to='dashboard' />}/>
				</Routes>
			</Box>

		</Box>
	)
}
