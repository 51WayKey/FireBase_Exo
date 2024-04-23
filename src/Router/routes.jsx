import { createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import Account from "./Account";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: "/account",
        element: <Account />,
    },
    ]);

export default routes