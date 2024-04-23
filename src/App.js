
import './App.css';
// import Auth from './components/Auth';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/routes';

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
