import { Navigate, Route, Routes } from 'react-router-dom';
import DataConnection from '../components/DataConnection';
import DataSource from '../components/DataSource';




export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/connection' element={<DataConnection />} />
        <Route path='/source' element={<DataSource />} />

        <Route path='/*' element={<Navigate to="/connection" />} />
      </Routes>
    </>
  )
}
