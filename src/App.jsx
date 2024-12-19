import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from "./pages/login";

let router = createBrowserRouter([
	{
		path: `/`,
		element: <Dashboard />,
	},
	{
		path: `register`,
		element: <Register />,
	},
	{
		path: `login`,
		element: <Login />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
