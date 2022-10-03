import Login from './Pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import './styles/App.scss'
import PageNotFound from './Pages/PageNotFound';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />} >
          <Route path='/users' element={<Users />} />
        </Route>
        <Route path='*' element={ <PageNotFound/> } />
      </Routes>
    </div>
  );
}

export default App;
