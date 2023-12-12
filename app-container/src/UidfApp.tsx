import { AuthProvider } from "./auth";
import { AppTheme } from "./theme";
import { AppRouter } from "./routes/AppRouter";

export const UidfApp = () => {
  return (
    <AuthProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </AuthProvider>
  )
}
