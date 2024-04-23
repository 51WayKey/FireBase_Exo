
import './App.css';
// import Auth from './components/Auth';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/routes';
import { UserContextProvider } from './contexts/userContext';

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={routes}>
      </RouterProvider>
    </UserContextProvider>
  );
}

export default App;
