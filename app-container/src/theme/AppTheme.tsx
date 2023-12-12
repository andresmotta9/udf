import { FunctionComponent } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import purpleTheme from "./purpleTheme";
import { ChildrenProps } from "../types/childrenType";



export const AppTheme = ({ children }: ChildrenProps) => {
	return (
		<ThemeProvider theme={purpleTheme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
