import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const DataApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
